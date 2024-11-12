export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        nl: {
            hero_belgium: "Belgium",
            hero_sub: "Het kids entertainment voor jouw event.",
            hero_booknow: "Boek nu",

            about_title: "Wie is Britt?",
            about_content: [
                'Ik ben Britt het gezicht achter Partyanimals Belgium, 25 jaar en enorm gepassioneerd om magische momenten voor kids te creëren.',
                'Jarenlang ben ik al bezig met kids entertainment, Met Partyanimals zorg ik voor onvergetelijke en magische momenten voor iedereen.',
                'Party Animals is gegroeid tot een team van getalenteerde en gepassioneerde entertainers om elk kind een onvergetelijke ervaring te geven.'
            ],

            pricing_headers: [
                'Partyanimal pakket',
                'Zen pakket',
                'B2B pakket',
            ],
            pricing_content: [
                'vanaf 250 euro',
                'vanaf 745 euro',
                '360 euro',
            ],
            pricing_extra_cost: 'excl. verplaatsingkosten',
            pricing_button_more_info: 'meer info',
            pricing_button_book_now: 'boek nu',
            pricing_button_specific: 'Specifieke aanvraag',
            pricing_not_found: 'Niet gevonden wat je zocht?',
        },
        en: {
            hero_belgium: "Belgium",
            hero_sub: "The kids entertainment for your event.",
            hero_booknow: "Book now",
        },
        fr: {
            hero_belgium: "Belgium",
        }
    }
}))