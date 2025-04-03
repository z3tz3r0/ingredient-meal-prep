import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Home = () => {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
                const category = response.data.categories;

                if (!category) {
                    throw new Error('This menu is not existed')
                }

                setMeals(category);
            } catch (error) {
                setIsError(error);
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [])

    return (
        <main className='p-8 text-center bg-yellow-950'>
            <h1 className='mb-8 text-white'>Pick meals you wanna prep</h1>

            <div className='flex flex-wrap gap-4'>
                {loading && <p>Loading...</p>}
                {isError && <p>Response error: {isError}</p>}
                {meals.map(item => <Card key={item.idCategory} categoryName={item.strCategory} categoryImage={item.strCategoryThumb} />)}
            </div>
        </main>
    )
}

export default Home