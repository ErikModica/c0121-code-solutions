select sum("payments"."amount") as "sumTotalRevenue"
from "payments"
join "rentals" using ("rentalId")
join "inventory" using ("inventoryId")
join "films" using ("filmId")
group by "films"."filmId";


select "filmId",
"replacementCost"
from "films"
order by "filmId";


with "sum-total-rev" as (
  select sum("payments"."amount") as "sumTotalRevenue"
  from "payments"
  join "rentals" using ("rentalId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
  group by "films"."filmId"),

   "replacement-cost" as (
    select "filmId",
    "replacementCost"
    from "films"
    order by "filmId")

    select "films"."title" as "filmName",
    "sumTotalRevenue" - "replacementCost" as "totalProfit"
    from "sum-total-rev"
    join "replacement-cost" using "filmId"
    group by "filmId";
