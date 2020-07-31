import React from "react"
import { Menu, Input } from 'antd';
import {
    AppstoreOutlined,
    StarFilled,
    PictureOutlined,
    AppleOutlined,
    SoundOutlined,
    CameraOutlined,
    SmileOutlined,
    LoginOutlined,
    UserAddOutlined,
    ContactsOutlined,
    HomeOutlined,
    AudioOutlined
} from '@ant-design/icons';
import "../LayoutMenu/menu.css";
import { Link } from "react-router-dom";
import img1 from "../../Assests/Img/Logo.png";

const { SubMenu } = Menu;

export class LayoutMenu extends React.Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {

        const { Search } = Input;
        return (
            <div className="MainMenu" >

                <Link to="/home" className="imgLogo">
                    <img className="imgLogo2" src={img1} />
                </Link>

                
            <Search
                placeholder="Buscar"
                onSearch={value => console.log(value)}
                className="Buscador"
            />
                <Menu
                    theme="dark"
                    className="keys"
                    mode="horizontal"
                    inlineCollapsed={this.state.collapsed} >

                    <Menu.Item key="2" className="op"
                        icon={< HomeOutlined />} >
                        <Link to="/home">Inicio</Link>
                    </Menu.Item>

               
                        
                    <SubMenu key="sub2" className="op"
                        icon={< AppstoreOutlined />}
                        title="Servicios" >

                        <Menu.Item key="sub3"
                            icon={< StarFilled />}
                            title="Decoración" >
                            <Link to="/" >Decoracion</Link>
                        </Menu.Item>
                        
                        <Menu.Item key="sub4"
                            icon={< PictureOutlined />}
                            title="Lugares " >

                            <Link to="/">Lugares</Link>
                        </Menu.Item>

                        <Menu.Item key="sub5"
                            icon={< AppleOutlined />}
                            title="Bufet" >
                            <Link to="/">Bufet</Link>
                        </Menu.Item>

                        <Menu.Item key="sub6"
                            icon={< SoundOutlined />}
                            title="Sonido" >
                            <Link to="/">Sonido</Link>
                        </Menu.Item>

                        <Menu.Item key="sub7"
                            icon={< CameraOutlined />}
                            title="Fotografia" >
                            <Link to="/">Fotografia</Link>

                        </Menu.Item>

                        <Menu.Item key="sub8"
                            icon={< SmileOutlined />}
                            title="Animacón" >
                            <Link to="/">
                                Animación

                                </Link>
                        </Menu.Item>
                    </SubMenu>
           
                    <Menu.Item key="4" className="op"
                        icon={< ContactsOutlined  />} >
                        <Link to="/">
                            Quienes Somos
                    </Link>
                    </Menu.Item>

                    <Menu.Item key="5" className="op"
                        icon={< UserAddOutlined />} >
                        <Link to="/registre">
                            Registrarse
                    </Link>
                    </Menu.Item>

                    <Menu.Item key="6" className="op"
                        icon={< LoginOutlined />} >
                        <Link to="/login">
                            Iniciar Sesión
                            </Link>
                    </Menu.Item>

                </Menu >
            </div >
        );
    }
}