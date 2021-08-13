// Include with the inde.HTML.
// Get the Data From Database Hello.
function getItems() {
	db.collection('items')
		.get()
		.then((res) => {
			let items = [];
			res.forEach((doc) => {
				items.push({
					id: doc.id,
					image: doc.data().image,
					name: doc.data().name,
					make: doc.data().make,
					rating: doc.data().rating,
					price: doc.data().price,
				});
			});
			generateItems(items);
		});
}

// Here the funtion Ending here getItems().

// Here When Click The Add To cart Button Then Only Database quantity Add One.
function addToCart(item) {
	let cartItem = db.collection('cart-items').doc(item.id);
	cartItem.get().then(function (doc) {
		if (doc.exists) {
			cartItem.update({
				quantity: doc.data().quantity + 1,
			});
		}
		// Here I put The Else Statment.
		else {
			cartItem.set({
				image: item.image,
				make: item.make,
				name: item.name,
				rating: item.rating,
				price: item.price,
				quantity: 1,
			});
		}
	});
}

// Here I Style The Products And Show The Index.Html Page.
// And Funtion Calling top of the file.
function generateItems(items) {
	let itemsHTML = '';

	// Here I Styling The Product On Index.Html Page.
	items.forEach((item) => {
		let doc = document.createElement('div');
		doc.classList.add('main-product', 'mr-5');
		doc.innerHTML = `
        <div class="product-iamge w-48 h-52 bg-white rounded-lg p-4">
									<img
										src="${item.image}"
										class="w-full h-full object-contain"
									/>
								</div>
								<div class="product-name text-gray-700 font-bold mt-2 text-sm">
									${item.name}
								</div>
								<div class="product-make text-green-700 font-bold">
									${item.make}
								</div>
								<div class="product-rating text-yellow-300 font-bold my-1">
									⭐⭐⭐⭐⭐ ${item.rating}
								</div>
								<div class="product-price font-bold text-gray-700 text-lg">
									$ ${numeral(item.price).format('$0,0.00')}
								</div>`;
		// FUntion Ending Here generateItems(items) this.

		// Here I style the Add To Cart Button ON html File.
		let addToCartEl = document.createElement('div');
		addToCartEl.classList.add(
			'hover:bg-yellow-600',
			'cursor-pointer',
			'text-md',
			'bg-yellow-500',
			'w-28',
			'h-8',
			'add-to-cart',
			'justify-center',
			'items-center',
			'flex',
			'text-white',
			'rounded'
		);
		addToCartEl.innerText = 'Add To cart'; // Here I Write The Button Name.
		addToCartEl.addEventListener('click', function () {
			// Here When Click The Add To cart Button Then This Fuction Call.
			addToCart(item);
		});
		doc.appendChild(addToCartEl);
		document.querySelector('.main-section-products').appendChild(doc);
	});
}

getItems(); // Here I Call The Funtion.
