import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Api from "./components/Components/Api.jsx";
import Bgchange from "./components/Components/Bgchange.jsx";
import Counter from "./components/Components/Counter.jsx";
import FileUpload from "./components/Components/FileUpload.jsx";
import Form from "./components/Components/Form.jsx";
import Hello from "./components/Components/Hello.jsx";
import Navbar from "./components/constant/Navbar.jsx";
import Quotes from "./components/Components/Quotes.jsx";
import Registration from "./components/Components/Registration.jsx";
import Timer from "./components/Components/Timer.jsx";
import Todo from "./components/Components/Todo.jsx";
import Toggle from "./components/Components/Toggle.jsx";
import Weather from "./components/Components/Weather.jsx";
import SearchFilter from "./components/Components/SearchFilter.jsx";
import Pagination from "./components/Components/Pagination.jsx";
import ColorPicker from "./components/Components/ColorPicker.jsx";
import Hamburger from "./components/Components/Hamburger.jsx";
import UseCounter from "./components/useReducer/Counter.jsx";
import UseTodo from "./components/useReducer/Todo.jsx";
import UsePagination from "./components/useReducer/Pagination.jsx";
import Authentication from "./components/useContext/Auth/Authentication.jsx";
import { AuthProvider } from "./components/useContext/Auth/AuthContext.jsx";
import Drag from "./components/Components/Drag.jsx";
import Translate from "./components/useContext/translation/Translate.jsx";
import { LocalContextProvider } from "./components/useContext/translation/TransContext.jsx";
import MultiApi from "./components/Components/MultiApi.jsx";
import MultiState from "./components/Components/MultiState.jsx";
import Gallery from "./components/useReducer/Gallery.jsx";
import { ThemeProvider } from "./components/useContext/theme/ThemeContext.jsx";
import Theme from "./components/useContext/theme/Theme.jsx";
import ShoppingCart from "./components/redux/ShoppingCart.jsx";
import { CartProvider } from "./components/redux/CartContext.jsx";

const App = () => {
	return (
		<Router>
			<AuthProvider>
				<LocalContextProvider>
					<ThemeProvider>
						<CartProvider>
							<Navbar />
							<Routes>
								<Route path='/hello' element={<Hello />} />
								<Route path='/counter' element={<Counter />} />
								<Route path='/form' element={<Form />} />
								<Route path='/toggle' element={<Toggle />} />
								<Route path='/api' element={<Api />} />
								<Route path='/timer' element={<Timer />} />
								<Route path='/todo' element={<Todo />} />
								<Route
									path='/bgChange'
									element={<Bgchange />}
								/>
								<Route path='/quotes' element={<Quotes />} />
								<Route
									path='/fileupload'
									element={<FileUpload />}
								/>
								<Route
									path='/registration'
									element={<Registration />}
								/>
								<Route path='/weather' element={<Weather />} />
								<Route
									path='/search'
									element={<SearchFilter />}
								/>
								<Route
									path='/pagination'
									element={<Pagination />}
								/>
								<Route
									path='/colorPicker'
									element={<ColorPicker />}
								/>
								<Route
									path='/hamburger'
									element={<Hamburger />}
								/>
								<Route
									path='/usecounter'
									element={<UseCounter />}
								/>
								<Route path='/usetodo' element={<UseTodo />} />
								<Route
									path='/usepagination'
									element={<UsePagination />}
								/>
								<Route
									path='/useauth'
									element={<Authentication />}
								/>
								<Route path='/drag' element={<Drag />} />
								<Route
									path='/translate'
									element={<Translate />}
								/>
								<Route
									path='/multiapi'
									element={<MultiApi />}
								/>
								<Route
									path='/multistate'
									element={<MultiState />}
								/>
								<Route
									path='/usegallery'
									element={<Gallery />}
								/>
								<Route path='/themes' element={<Theme />} />
								<Route
									path='/shoppingcart'
									element={<ShoppingCart />}
								/>
							</Routes>
						</CartProvider>
					</ThemeProvider>
				</LocalContextProvider>
			</AuthProvider>
		</Router>
	);
};

export default App;
