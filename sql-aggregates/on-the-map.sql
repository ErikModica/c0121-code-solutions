  select "countries"."name" as "country",
         count("cities"."countryId") as "cityCount"
    from "countries"
    join "cities" using ("countryId")
group by "countryId";
