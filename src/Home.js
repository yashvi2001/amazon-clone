import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            {/* Image Banner */}
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/GW_Hero/Main_Desktop_1500x600_DS._CB404300086_.jpg"
                alt="" />
            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                {/* Product */}
                <Product
                    id="12321"
                    title="DEEBACO Women's Striped Bell Sleeved Dress with Lace"
                    price={1900}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51KzE%2BqNRYL._UL1100_.jpg"
                />
                <Product
                    id="12321"
                    title="Miss Chase Women's Comfortable Cotton Striped Bodycon Midi Sleeveless Round Neck Dress"
                    price={800}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81FGuNZy08L._UL1500_.jpg"
                />
                <Product
                    id="12321"
                    title="Miss Chase Women's Mini Shift Dress with Pockets"
                    price={999}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51uG6u0XUTL._UL1024_.jpg"
                />
            </div>
            <div className="home__row">
                {/* Product */}
                <Product
                    id="12321"
                    title="DEEBACO Women's Striped Bell Sleeved Dress with Lace"
                    price={1900}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51KzE%2BqNRYL._UL1100_.jpg"
                />
                <Product
                    id="12321"
                    title="Miss Chase Women's Comfortable Cotton Striped Bodycon Midi Sleeveless Round Neck Dress"
                    price={800}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81FGuNZy08L._UL1500_.jpg"
                />
                <Product
                    id="12321"
                    title="Miss Chase Women's Mini Shift Dress with Pockets"
                    price={999}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51uG6u0XUTL._UL1024_.jpg"
                />
            </div>
            <div className="home__row">
                {/* Product */}
                <Product
                    id="12321"
                    title="DEEBACO Women's Striped Bell Sleeved Dress with Lace"
                    price={1900}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51KzE%2BqNRYL._UL1100_.jpg"
                />
                <Product
                    id="12321"
                    title="Miss Chase Women's Comfortable Cotton Striped Bodycon Midi Sleeveless Round Neck Dress"
                    price={800}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81FGuNZy08L._UL1500_.jpg"
                />
                <Product
                    id="12321"
                    title="Miss Chase Women's Mini Shift Dress with Pockets"
                    price={999}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51uG6u0XUTL._UL1024_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
