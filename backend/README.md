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

    Method : GET

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

        Method : GET

        sort= price, rating
        order= desc, asc

## Rating

    Sort by Rating

    You can Change order according to your need 'asc' or 'desc'

    https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&sort=rating&order=desc

    Method : GET

# Search Query

    search by name, description, category, design, brand

    https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&q=Printed

    Method : GET

    Change  q=search_text

# Filter

    Filter by category

      https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&category=Backpack

      Method : GET

      You can filter data by  category, offer, brand, discount, design, type

# Pagination and limit

    ?page=page_no&limit=how_many_data

    ex. ?page=1&limit=20

    By default limit=10

# Min Max

    ?min=100&max=200

    This will return the data whose value is between 100-200

    ?min=your_value&max=your_value

# Single Product

    https://busy-jade-mussel-sock.cyclic.app/products/:id

    :id -> Product Id

    Method : GET

<hr/>

# User

## Signup Endpoints

    https://busy-jade-mussel-sock.cyclic.app/user/signup

    Method : POST

## Signup Schema

     {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        confirm_pass: { type: String, required: true },
        address: { type: String, optional },
        role: { type: String, optional },
        avatar: { type: String, optional },
    }

      * Password and Confirm Password must be the same

## Signup Response

        if email is already registered
         { msg: "You are already have an account Please Login" }

        if registration done
         { msg: "Registration Successfull !" }

## Login Endpoints

    https://busy-jade-mussel-sock.cyclic.app/user/login

    Method : POST

## Login Schema

     {
        email: { type: String, required: true },
        password: { type: String, required: true }
    }

## Login Response

        if email is not registered
        { msg: "You don't have an account Please Register yourself" }

        if login done
         {
            msg,
            token,
            data: { name, avatar }
         }

        if Invalid Data
         { msg: "Invalid Credentials" }

# Protected Routes ( Token is Required in headers)

## Update User Address Endpoints

    https://busy-jade-mussel-sock.cyclic.app/user/address

    Method : PATCH

## Request Schema

     { address:"Your_Address" }

## Response

        if address is not present in request body
        { msg: "Invalid Data" }

       if address updated
        { msg: "Address Updated" }

<hr/>

# Cart Endpoint (Token Required)

    https://busy-jade-mussel-sock.cyclic.app/cart

    Method : GET

## Cart Response

    if no item in your cart
        { msg: "There is no item in your cart" }

    if cart have items
        { data: {  _id,  userId, cart: [ array of products ] } }

# Add Item in the Cart

    https://busy-jade-mussel-sock.cyclic.app/cart/:id

    :id -> Product Id

    Method : POSt

## Response

    if product added to the cart
        { msg: "Product Added " }

    if product Id or Token is missing
        { msg: "You are not Authorized for this action" }

# Remove Item from Cart

    https://busy-jade-mussel-sock.cyclic.app/cart/:id

    :id -> Product Id

    Method : DELETE

## Response

    if product removed from the cart
        { msg: "Product removed from cart " }

    if product Id or Token is missing
        { msg: "You are not Authorized for this action" }
