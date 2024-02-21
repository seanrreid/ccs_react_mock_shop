/* eslint-disable react/prop-types */
const ProductDetail = ({ product }) => {
    return (
        <div className='card' style={{width: '300px', margin: '8px'}}>
            <div className='card-image'>
                <figure className='image is-square'>
                    <img
                        src={product.node.featuredImage.url}
                        alt={product.node.title}
                    />
                </figure>
            </div>
            <div className='card-content'>
                <div className='content'>
                    <h2 className='title'>{product.node.title}</h2>
                    <p>stuff</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
