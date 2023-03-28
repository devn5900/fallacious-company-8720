# API Details

# Products

## Endpoint

    https://busy-jade-mussel-sock.cyclic.app/products

## Product Schema

    {

        "id": 1,
        "name": "Men's Purple Justice League Society Graphic,
        "category": "T-Shirt",
        "price": 499,
        "design": "Graphic Print",
        "type": "Men",
        "offer": "14% OFF",
        "brand": "Boogy®",
        "discount": "66% OFF",
        "rating": "1.3"
        "image": "https://images.bewakoof.com/t640/men-s-purple-justice-league-society-graphic-printed-oversized-t-shirt-581274-1676971303-1.jpg",
        "tags": [
                  {
                    "type": "fit",
                    "label": "OVERSIZED FIT",
                    "bgColor": "rgba(82, 82, 82, 0.8)",
                    "textColor": "#fff"
                  }
                ],
        "description": "For TriBe Members official dc comics merchandise by bewakoof.com Men's Purple Justice League Society Graphic Printed Oversized T-shirt Men's Purple Justice League Society Graphic Printed Oversized T-shirt",

    }

## For particular type endpoint

    Types:  Men, Women, accessories

    All data related to type 'Men'

        https://busy-jade-mussel-sock.cyclic.app/products?type=Men

    All data related to type 'Women'

       https://busy-jade-mussel-sock.cyclic.app/products?type=Women

    All data related to type 'accessories'

       https://busy-jade-mussel-sock.cyclic.app/products?type=accessories

# sorting by

## Price

    Sort by Price

        You can Change order according to your need 'asc' or 'desc'

        https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&sort=price&order=desc

        sort= price, rating
        order= desc, asc

## Rating

    Sort by Rating

    You can Change order according to your need 'asc' or 'desc'

        https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&sort=rating&order=desc

# Search Query

    search by name, description, category, design, brand

    https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&q=Printed

    Change  q=search_text

# Filter

    Filter by category

      https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&category=Backpack

      You can filter data by  category, offer, brand, discount, design, gender, price, name,
