# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# AROMA CAFE
### Aroma Cafe es un proyecto de e-commerce de venta de cafes realizado íntegramente con React.js, que obtiene los datos ingresados en la plataforma Firebase de Google. Es completamente responsive para poder ser visto correctamente desde cualquier dispositivo.
# Instalación
Para clonar el proyecto en su dispositivo, se deben ejecutar las siguientes líneas en la terminal:

git clone https://github.com/agustinascarpinelli/react-coder.git

npm install

npm start
Dato: la URL que usarás para clonar el repositorio se encuentra en la página principal del repositorio, en el botón que dice "code".

# Firebase
## Collection
### Campos
#### Products
 * brand
 * description
 * grinding
 * img
 * name
 * origin
 * presentation
 * price
 * stock
 * variety
 * weight
#### Promo
 * description
 * image
 * name
 * price
 * stock

#### Orders
 * BuyerAdress (direccion del comprador)
 * BuyerEmail (email del comprador)
 * BuyerName (nombre del comprador
 * BuyerPayment (total de la compra)
 * BuyerQuantity (cantidad de productos comprados)
 * date (fecha de compra)
 * time (hora de la compra)
# Dependencias
## Para que realizar el proyecto se utilizaron las siguientes herramientas:
* React-icons
* React-icons-kit
* React-router-dom: routing de la web.
* React-Firebase: base de datos
* Get-google-fonts:Para utilizar las fuentes de google.

# Componentes:
* Button:Componente creado para utilizar en el detalle del producto (ItemDetail).El  mismo se compone un contador con los botones incrementar y decrementar y un boton para añadir al carrito.
* Cart: Componente que se encuentra bajo la ruta '/cart'. Provee un detalle de los productos añadidos al carrito (Nombre, la cantidad, el precio unitario y el subtotal, y un boton para añadir al carrito. Al final del detalle de los productos tenemos un boton para 'Finalizar la compra'( que nos redirije a 'cashout' en el caso de haber ingresado a nuestra cuenta, y en el caso de no haber ingresado nos redirijira a 'login' para forzarnos a tener que estar registrados en caso de querer realizar la compra) y un boton para 'Vaciar el carrito'. En el caso de no haber productos aparecera un texto indicando que no hay productos agregados al carrito y un boton para volver al inicio.
* CartWidget:Componente para mostrar en el NavBar un icono del carrito y un contador. En el caso de haber productos agregados al carrito se muestra el icono del carrito y el contador indicando la cantidad de productos agregados.En el caso de presionar el icono, nos redijire a '/cart' con el detalle de los productos agregados al carrito. 
* Cashout: Componente para finalizar la compra. Se encuentra bajo la ruta 'Cashout'. Se basa en un formulario con los campos 'nombre' 'email' (cuyo campo esta desactivado y se pone por defecto el email del usuario),'direccion' y 'celular'. Al presionar en finalizar la compra se envia documento para agregar en la coleccion 'orders' de firebase con los datos de la compra, aparece un mensaje en la pantalla en agradecimiento por la compra y luego de 8 segundos nos redirije a la pagina de incio. 
* Categories:Componente que se utiliza en 'ItemListContainer' para luego filtrar los productos.Se basa un div que posee las tres categorias por las cual filtrar a los productos (origen, presentacion y precio) ,los valores de las mismas por las cuales filtrar los productos y un boton para regresar a ver todos los productos.Este componente recibe cuatro funciones para ser utilizado en itemListContainer.
* Home:Al ingresar en la aplicacion, nos encontramos con el componente 'Home' bajo la ruta '/'. El mismo  se compone de una imagen ilustrativa de la marca y un boton que nos lleva a ver los productos.
* Item:Componente Item que se provee a itemListContainer una card para mostrar cada producto.La misma muestra la imagen del producto, su nombre, el precio  y un boton para ver el detalle que nos lleva a 'ItemDetailContainer' bajo la ruta '/itemDetail/{id}' (el id depende del producto seleccionado).
* ItemDetail: Componente utilizado por 'ItemDetailContainer' que provee un div para mostrar el detalle del producto con su imagen, descripcion y precio. Ademas, si el producto seleccionado no es un producto correspondiente a la coleccion de 'Promo', se indican la propiedad variedad y peso del producto.
* ItemDetailContainer:Componente que se encuentra bajo la ruta '/itemDetail/{id}' que consulta a firebase los datos del producto seleccionado y los muestra en el itemDetail. 
* ItemList:Componente que mapea los productos en 'Item'
* ItemListContainer:Componente que se encuentra bajo la ruta '/list'. Muestra todos los productos correspondientes la coleccion 'products' de firebase en el componente 'ItemList'. Recibe el componente 'Categories' y le proporciona las funciones para filtrar los productos. 
* ItemPromoContainer:Componente que se encuentra bajo la ruta '/promo'. Muestra todos los productos correspondientas a la coleccion 'promo' de firebase en el componente 'ItemList'.
* Loader: Componente creado para utilizar en aquellos casos en los que la aplicacion esta cargando datos (loading=true).
* Login: Componente para realizar el ingreso.Se encuentra bajo la ruta '/login'. Se compone de un formulario con los compos 'Email' y 'Contraseña'. Tambien se permite el ingreso con la cuenta de google, y hay una opcion para recuperar la contraseña en el caso de habersela olvidado, en la cual se envia un email al usuario para reestablecerla. En el caso de que los datos ingresados sean incorrectos saldra un mensaje escrito abajo del formulario indicando en el error (usario no registrado-contraseña incorrecta).Tambien tiene un boton para registrarse en el caso de no estarlo. Tanto el usuario como la contraseña se verifican utilziando la autenticacion proveida por firebase. 
* NavBar:Componente barra de navegacion. La misma se encuentra en toda la aplicacion.Contiene las secciones 'Nuestros productos ' que nos lleva a ver todos los productos, 'Promociones', que nos lleva a ver las promosiones ,'Ingresar' para ingresar a la cuenta y 'Registrarse',para registrarse en la aplicacion. En el caso de haber ingresado en lugar de las secciones 'Ingresar' y 'Registrarse' aparece el email del usuario y un boton para cerrar la sesion
* SignUp: Componente de registro. Se encuentra bajo la ruta '/signup'. Se compone de un formulario con los campos email y contraseña y se utiliza la autenticacion proveida por firebase que registra a un usuario con su email y contraseña. Tambien posee un boton para ingresar en el caso de ya estar registrado.


## Funciones de CartContext:
* addItem => añade el producto al carrito. En el caso de que el producto ya esté en el carrito, esta función va a evitar que se genere otra línea de ItemCart, solo modificará la cantidad de dicho producto.
* getQuantity => esta función permite que cuando agregas productos al carrito se muestre la cantidad en el CartWidget.
* isInCart => reconoce si el producto está o no en el carrito.
* clearCart => esta función está asociada al botón de vaciar carrito y limpiará todo lo que se encuentre en el.
* removeItem => esta función removerá el producto con ese id y seteará el nuevo valor del CartWidget.
* getQuantityProd => esta función se utiliza en ItemDetail para guardar la cantidad que seleccionás de ese producto en el contador.
* totalPrice => esta función calcula el valor total de la compra.
## Funciones de Authcontext:
### Funciones que utilizan el servicio de autenticacion de firebase
* login => Para realizar el ingreso de un usuario con email y contraseña.
* loginWithGoogle=>Para realizar el ingreso de un usuario con la cuenta de google.
* logOut=>Para realizar el cierre de sesion de una cuenta.
* resetPassword=>Para enviar un email al usuario para que reestablezca su contraseña.
* signUp=>Para realizar el registro de un usuario con su email y contraseña.




# Visualización de la página en el navegador

![Alt text](https://github.com/agustinascarpinelli/codoProy/blob/main/Docs/video-to-gif-converter.gif)
