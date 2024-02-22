import { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail';
import styles from './products.module.css'

function Products() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const url =
            'https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}';
        const apiData = await fetch(url).then((response) => response.json());
        setData(apiData.data.products.edges);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className={styles.root}>
            {data.map((item) => {
                return <ProductDetail product={item} key={item.node.id} />;
            })}
        </section>
    );
}

export default Products;
