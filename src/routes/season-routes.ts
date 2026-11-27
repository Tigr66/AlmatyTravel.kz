import { appRoutes } from "@/routes/app-routes";

export type SiteSeason = "winter" | "summer";

export const seasonRoutes = {
    winter: {
        main: appRoutes.WINTER_MAIN,
        about: appRoutes.WINTER_ABOUT,
        order: appRoutes.WINTER_ORDER,
        contacts: appRoutes.WINTER_CONTACTS,
        tours: appRoutes.WINTER_TOURS,
        mountainTours: appRoutes.WINTER_MOUNTAIN_TOURS,
        helicopterTours: appRoutes.WINTER_HELICOPTER_TOURS,
        buggyTours: appRoutes.WINTER_BUGGY_TOURS,
        translator: appRoutes.WINTER_TRANSLATOR,
        privateDriverGuide: appRoutes.WINTER_PRIVATE_DRIVER_GUIDE,
        horseRiding: appRoutes.WINTER_HORSE_RIDING,
        yurts: appRoutes.WINTER_YURTS,
        snowboardSchool: appRoutes.WINTER_SNOWBOARD_SCHOOL,
        skiLessons: appRoutes.WINTER_SKI_LESSONS,
        heliSki: appRoutes.WINTER_HELI_SKI,
        freeride: appRoutes.WINTER_FREERIDE,
    },
    summer: {
        main: appRoutes.SUMMER_MAIN,
        about: appRoutes.SUMMER_ABOUT,
        order: appRoutes.SUMMER_ORDER,
        contacts: appRoutes.SUMMER_CONTACTS,
        tours: appRoutes.SUMMER_TOURS,
        mountainTours: appRoutes.SUMMER_MOUNTAIN_TOURS,
        helicopterTours: appRoutes.SUMMER_HELICOPTER_TOURS,
        buggyTours: appRoutes.SUMMER_BUGGY_TOURS,
        translator: appRoutes.SUMMER_TRANSLATOR,
        privateDriverGuide: appRoutes.SUMMER_PRIVATE_DRIVER_GUIDE,
        horseRiding: appRoutes.SUMMER_HORSE_RIDING,
        yurts: appRoutes.SUMMER_YURTS,
        snowboardSchool: appRoutes.SUMMER_SNOWBOARD_SCHOOL,
        skiLessons: appRoutes.SUMMER_SKI_LESSONS,
        heliSki: appRoutes.SUMMER_HELI_SKI,
        freeride: appRoutes.SUMMER_FREERIDE,
    },
} as const;

export type SeasonRouteKey = keyof typeof seasonRoutes.winter;

export const getSeasonRoute = (season: SiteSeason, key: SeasonRouteKey) =>
    seasonRoutes[season][key];
