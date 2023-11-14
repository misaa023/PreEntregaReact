export const ItemDetail = ({ item }) => {
    return (
        <>
            <div className="card-bebida">
                <img
                    className="img-bebida"
                    src={item.pictureUrl}
                    alt={item.title}
                />
                <h1 className="text-center txt-bebida">{item.description}</h1>
                <h2 className="text-center txt-bebida">${item.price}</h2>
            </div>
        </>
    );
};
