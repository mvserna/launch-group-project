import React, { useState, useEffect }from 'react'
import CoffeeshopTile from "./CoffeeshopTile"


const CoffeeshopsPage = () => {
    const [coffeeShops, setCoffeeShops] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch("/api/v1/coffeeshops")
            if(!response.ok) {
                const errorMessage = `${response.status}: ${response.statusText}`
                const error = new Error(errorMessage)
                throw(error)
            }

            const coffeeShopList = await response.json()
            setCoffeeShops(coffeeShopList.coffeeshops)

        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const coffeeShopArray = coffeeShops.map((shop) => {
        return(
            <CoffeeshopTile 
                key={shop.id}    
                id={shop.id}
                name={shop.name}
                address={shop.address}
                city={shop.city}
                state={shop.state}
                zip={shop.zip}
            />
        )
    })

    return(
        <div className="coffeeshops-list">
            {coffeeShopArray}
        </div>
    )
}

export default CoffeeshopsPage