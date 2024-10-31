import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap'
import{  FaShoppingCart, FaUser}  from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { logout} from '../slices/authSlice'
import SearchBox from './SearchBox'
import { resetCart } from '../slices/cartSlice'


const Header = () => {
  const { cartItems } = useSelector((state) => state.cart)
  const { userInfo } = useSelector((state) => state.auth)

const dispatch = useDispatch()
const navigate = useNavigate()
const [logoutApiCall] = useLogoutMutation()

const logoutHandler = async () =>{
    try {
      await logoutApiCall().unwrap();
      dispatch(logout())
      dispatch(resetCart())
      navigate('/login')
    } catch (err) {
      console.log(err);
    }
}

  return (
    
    <header>
        <Navbar style={{ background:"black", color:"white",}} variant='dark' expand='lg' collapseOnSelect>
            <Container>
               <LinkContainer to ='/'> 
              
            <Navbar.Brand >
              <strong style={{ marginRight:"60px"}}>Merchant & Co </strong>

              </Navbar.Brand>
              </LinkContainer> 
              <Link to={'/products'} style={{color:"white", textDecoration:"none", font:"bold"}} >   Products</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
                <Nav className="ms-auto">
               
                 
                  <SearchBox />
                    <LinkContainer to='/cart'>
                      <Nav.Link >
                        <FaShoppingCart/> Cart
                        { 
                        cartItems.length > 0 && (
                         < Badge pill bg='light' style = {{marginLeft:"5px", color:'teal'}} >
                            { cartItems.reduce((acc, cur) => acc + cur.qty, 0) }
                         </Badge>
                        )}
                        </Nav.Link>
                        </LinkContainer>
                        { userInfo ? (
                          <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                              <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}>
                                Logout
                            </NavDropdown.Item>
                          </NavDropdown>
                        ) : ( <LinkContainer to ='/login'>
                          <Nav.Link href='/login' >
                        <FaUser/> Sign in
                      </Nav.Link>
                    </LinkContainer>
                    )}
                   {userInfo && userInfo.isAdmin && (
                    <NavDropdown title ='Admin' id ='adminmenu'>
                      <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                   )}
                      
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )

}

export default Header