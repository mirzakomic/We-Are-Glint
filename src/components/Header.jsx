const Header = () => {
    return (
        <header>
            <section className="jumbotron_header">
            <h2 className="header-h2">Hello There</h2>
            <h1>We Are Glint</h1>
            <hr />
            <p className="welcome-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellendus eveniet unde. Illum quos nisi ullam veniam eveniet inventore eaque, nesciunt, beatae ex amet corporis facilis quas aspernatur soluta nulla voluptas pariatur eius debitis molestias reprehenderit consequuntur enim voluptate dicta repellat! Eaque, a? Reiciendis nobis quisquam tenetur, ad officiis accusantium?</p>
            </section>
            <div className="row">
                <div className="column">
                    <h3>127</h3>
                    <p className="bold">Awards Received</p>
                </div>
                <div className="column">
                    <h3>1505</h3>
                    <p className="bold">Cups of Coffee</p>
                </div>
                <div className="column">
                    <h3>109</h3>
                    <p className="bold">Projects Completed</p>
                </div>
                <div className="column">
                    <h3>102</h3>
                    <p className="bold">Happy Clients</p>
                </div>
            </div>
        </header>
    );
}
 
export default Header;