import uuid
from collections.abc import Sequence

from sqlalchemy import (
    select,
)

from polar.advertisement.schemas import (
    CreateAdvertisementCampaign,
    EditAdvertisementCampaign,
)
from polar.kit.db.postgres import AsyncSession
from polar.kit.utils import utc_now
from polar.models.advertisement_campaign import AdvertisementCampaign


class AdvertisementCampaignService:
    async def get(
        self, session: AsyncSession, id: uuid.UUID, allow_deleted: bool = False
    ) -> AdvertisementCampaign | None:
        query = select(AdvertisementCampaign).where(AdvertisementCampaign.id == id)

        if not allow_deleted:
            query = query.where(AdvertisementCampaign.deleted_at.is_(None))

        res = await session.execute(query)
        return res.scalars().unique().one_or_none()

    async def create(
        self,
        session: AsyncSession,
        create: CreateAdvertisementCampaign,
    ) -> AdvertisementCampaign:
        campaign = AdvertisementCampaign(
            subscription_id=create.subscription_id,
            subscription_benefit_id=create.subscription_benefit_id,
            image_url=create.image_url,
            text=create.text,
            link_url=create.link_url,
        )
        session.add(campaign)
        await session.commit()
        return campaign

    async def edit(
        self,
        session: AsyncSession,
        campaign: AdvertisementCampaign,
        edit: EditAdvertisementCampaign,
    ) -> AdvertisementCampaign:
        campaign.image_url = edit.image_url
        campaign.link_url = edit.link_url
        campaign.text = edit.text
        await session.commit()
        return campaign

    async def delete(
        self,
        session: AsyncSession,
        campaign: AdvertisementCampaign,
    ) -> AdvertisementCampaign:
        campaign.deleted_at = utc_now()
        await session.commit()
        return campaign

    async def search(
        self,
        session: AsyncSession,
        subscription_id: uuid.UUID | None,
        subscription_benefit_id: uuid.UUID | None,
    ) -> Sequence[AdvertisementCampaign]:
        statement = select(AdvertisementCampaign).where(
            AdvertisementCampaign.deleted_at.is_(None)
        )

        if subscription_id:
            statement = statement.where(
                AdvertisementCampaign.subscription_id == subscription_id
            )
        if subscription_benefit_id:
            statement = statement.where(
                AdvertisementCampaign.subscription_benefit_id == subscription_benefit_id
            )

        res = await session.execute(statement)
        return res.scalars().unique().all()


advertisement_campaign_service = AdvertisementCampaignService()
