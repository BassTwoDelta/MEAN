app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+ "/static"));s
app.use(flash());
app.set("view engine", "ejs");
app.set("views",__dirname+ "/views");

app.use(session({
    secret: "keyboardkitteh",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge : 6000}
}))