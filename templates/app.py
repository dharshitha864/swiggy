from flask import Flask, render_template

app = Flask(__name__)

# ---------------- Authentication ----------------

@app.route("/")
def login():
    return render_template("login.html")

@app.route("/signup")
def signup():
    return render_template("signup.html")

@app.route("/forgot_password")
def forgot_password():
    return render_template("forgot_password.html")


# ---------------- Customer Module ----------------

@app.route("/home")
def home():
    return render_template("customer/home.html")

@app.route("/restaurants")
def restaurants():
    return render_template("customer/restaurants.html")

@app.route("/restaurant_details")
def restaurant_details():
    return render_template("customer/restaurant_details.html")

@app.route("/menu")
def menu():
    return render_template("customer/menu.html")

@app.route("/search")
def search():
    return render_template("customer/search.html")


# ---------------- Cart & Checkout ----------------

@app.route("/cart")
def cart():
    return render_template("customer/cart.html")

@app.route("/checkout")
def checkout():
    return render_template("customer/checkout.html")

@app.route("/payment")
def payment():
    return render_template("customer/payment.html")


# ---------------- Profile ----------------

@app.route("/profile")
def profile():
    return render_template("customer/profile.html")


# ---------------- Orders ----------------

@app.route("/orders")
def orders():
    return render_template("customer/orders.html")


# ---------------- Offers ----------------

@app.route("/offers")
def offers():
    return render_template("customer/offers.html")


# ---------------- Help ----------------

@app.route("/help")
def help_page():
    return render_template("customer/help.html")


if __name__ == "__main__":
    app.run(debug=True)