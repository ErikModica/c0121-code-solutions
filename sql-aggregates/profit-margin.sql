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
