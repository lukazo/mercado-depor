function Hero() {

    const saludar = () => {
        alert('holaa')
    };

    return (
        <>
            <h1>Bienvenidos a mi tienda</h1>
            <p>Vendemos Waffles</p>
            <button onClick={saludar}>Saludar</button>
        </>
    );
}

export default Hero;