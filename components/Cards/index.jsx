'use client';
import React, { useContext } from 'react';
import context from '../../app/context/Context';

import Card from './Card';

const Cards = () => {
	const { activeData, activeFilteredData, loading } = useContext(context);

	if (loading || !activeData.length) {
        return (
			<div className='loader' />
        )
	}
	return (
		<section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-4 max-w-screen-lg'>
			{activeFilteredData.length
				? activeFilteredData.map(({ id, price, title, thumbnail, store, link }) => (
                    <Card
                        id={id}
                        price={price}
                        title={title}
                        thumbnail={thumbnail}
                        key={id}
                        store={store}
                        link={link}
                    />
                ))
				: activeData.map(({ id, price, title, thumbnail, store, link }) => (
                    <Card
                        id={id}
                        price={price}
                        title={title}
                        thumbnail={thumbnail}
                        key={id}
                        store={store}
                        link={link}
                    />
                ))}
		</section>
	);
};

export default Cards;
