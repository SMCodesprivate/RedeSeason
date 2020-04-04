import React from 'react';
import { FiHome, FiTriangle, FiBookOpen } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { ContainerMenu, ListCategories, CategoryItem, ListItens, MoreItens, Item } from './style.js';

export default function Menu() {
	return (
		<ContainerMenu>
			<ListCategories>
				<Link to="/">
					<CategoryItem>
						<FiHome size={24} color="#ffffff" />
						Página principal
					</CategoryItem>
				</Link>
				<MoreItens>
					<CategoryItem rotate={180}>
						Rankup Ocean
						<FiTriangle size={24} color="#ffffff" />
					</CategoryItem>
					<ListItens>
						<ul>
							<Item>Vips</Item>
							<Item>Cash</Item>
						</ul>
					</ListItens>
				</MoreItens>
				<CategoryItem>
					<FiBookOpen size={24} color="#ffffff" />
					Novidades
				</CategoryItem>
				<CategoryItem>
					<FiHome size={24} color="#ffffff" />
					Página principal
				</CategoryItem>
			</ListCategories>
		</ContainerMenu>
	);
}