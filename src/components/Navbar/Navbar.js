import CartWidget from "../CartWidget/CartWidget"


const Navbar = () => {
    return (
        <nav style={{ display:'flex', justifyContent:'space-around', alignItems: 'center' }}>
            
            <h1>Ecommerce</h1>
            <section>
                <button className="btn btn-dark">Remeras</button>
                <button className="btn btn-dark">Pantalones</button>
                <button className="btn btn-dark">Buzos</button>
            </section>
            <CartWidget />
            <itemListContainer />

            
        </nav>
    )
}

export default Navbar