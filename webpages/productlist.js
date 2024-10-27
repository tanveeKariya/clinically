<html>
<head>
    <title>Product Page</title>
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f0f0;
        }
        .product-card {
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
        .product-title {
            font-size: 18px;
            font-weight: bold;
            color: #333333;
        }
        .product-description {
            font-size: 14px;
            color: #666666;
        }
        .product-image {
            width: 100px;
            height: 100px;
            margin: 0 auto 10px;
        }
        .button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }
        .button.red {
            background-color: #f44336;
        }
    </style>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        function App() {
            return (
                <div>
                    <nav className="bg-white shadow-md p-4">
                        <div className="container mx-auto flex justify-between items-center">
                            <div className="text-xl font-bold">Logo</div>
                            <div>
                                <a href="#" className="text-gray-700 px-4">Home</a>
                                <a href="#" className="text-gray-700 px-4">Products</a>
                                <a href="#" className="text-gray-700 px-4">Contact</a>
                            </div>
                        </div>
                    </nav>
                    <div className="container mx-auto p-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="product-card">
                                <img src="https://placehold.co/100x100" alt="Product 1 image" className="product-image" />
                                <div className="product-title">Product 1</div>
                                <div className="product-description">Description of product 1</div>
                                <button className="button">Buy Now</button>
                            </div>
                            <div className="product-card">
                                <img src="https://placehold.co/100x100" alt="Product 2 image" className="product-image" />
                                <div className="product-title">Product 2</div>
                                <div className="product-description">Description of product 2</div>
                                <button className="button red">Buy Now</button>
                            </div>
                            <div className="product-card">
                                <img src="https://placehold.co/100x100" alt="Product 3 image" className="product-image" />
                                <div className="product-title">Product 3</div>
                                <div className="product-description">Description of product 3</div>
                                <button className="button">Buy Now</button>
                            </div>
                            <div className="product-card">
                                <img src="https://placehold.co/100x100" alt="Product 4 image" className="product-image" />
                                <div className="product-title">Product 4</div>
                                <div className="product-description">Description of product 4</div>
                                <button className="button red">Buy Now</button>
                            </div>
                            <div className="product-card">
                                <img src="https://placehold.co/100x100" alt="Product 5 image" className="product-image" />
                                <div className="product-title">Product 5</div>
                                <div className="product-description">Description of product 5</div>
                                <button className="button">Buy Now</button>
                            </div>
                            <div className="product-card">
                                <img src="https://placehold.co/100x100" alt="Product 6 image" className="product-image" />
                                <div className="product-title">Product 6</div>
                                <div className="product-description">Description of product 6</div>
                                <button className="button red">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>