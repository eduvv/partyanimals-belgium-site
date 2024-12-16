import {PACK} from "~/config/packs";

export type BookingData = {
    pack: PACK,

    hours: SubAmount,
    kids: SubAmount,
    pinjata: SubAmount,
    workshop: SubAmount,
    comfort: SubAmount,

    totalExclBtw: number
    btw: number
    totalInclBtw: number
};

export type EmailBody = {
    bookingData?: BookingData,
    contactData: {
        name: string,
        email: string,
        phone?: string,
        streetName?: string,
        streetNumber?: string,
        streetBus?: string,
        city?: string,
        postalCode?: string,
        country?: string,
        partyDate?: string,
        extraInfo?: string,
        howDidYouFindMe?: string,
    },
}

type SubAmount = {
    amount: number;
    pricePer: number;
    priceTotal: number;
}