# Django Snake Game


## ✨ Features

* **Classic Snake Gameplay:** Control a snake to eat food and grow longer.
* **Score Tracking:** Keep track of your score as you eat more food.
* **Collision Detection:** Game over on collision with walls or the snake's own body.
* **Responsive Controls:** Use arrow keys or WASD for intuitive movement.
* **Web-Based:** Play directly in your browser.

## 🚀 Live Demo

You can play the live version of the game here:
[Play the Django Snake Game Live!](https://haftu-tekle.github.io/snake_django/) ## 🛠️ Installation & Setup

Follow these steps to get the project up and running on your local machine.

### Prerequisites

* Python 3.8+
* pip (Python package installer)
* Git

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/haftu-tekle/snake_django.git](https://github.com/haftu-tekle/snake_django.git)
    cd snake_django
    ```

2.  **Create and activate a virtual environment (recommended):**
    ```bash
    python -m venv venv
    # On Windows:
    .\venv\Scripts\activate
    # On macOS/Linux:
    source venv/bin/activate
    ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Run Django migrations:**
    ```bash
    python manage.py migrate
    ```

5.  **Start the development server:**
    ```bash
    python manage.py runserver
    ```

6.  **Access the game:**
    Open your web browser and go to `http://127.0.0.1:8000/`.

## 🎮 How to Play

* Use the **Arrow Keys** (Up, Down, Left, Right) or **WASD** (W, S, A, D) to control the snake's direction.
* Guide the snake to eat the food (colored square) to grow and score points.
* Avoid hitting the walls or your own snake body.
* The game ends upon collision.

