import type { Meta, StoryObj } from '@storybook/react';
import { Article } from '5entities/Article';
import { ArticleBlockType, ArticleType } from '5entities/Article/model/types/article';
import { StoreDecorator } from '6shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';

type Story = StoryObj<typeof ArticleDetailsPage>;

const meta: Meta<typeof ArticleDetailsPage> = {
    title: '2pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    tags: ['autodocs'],
};

export default meta;

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Що нового у JS за 2022 рік?',
    img: 'https://placehold.co/300x200',
    views: 1022,
    createdAt: '05.10.2023',
    user: { id: '1', username: 'John Doe' },
    type: [
        ArticleType.IT,
        ArticleType.SCIENCE,
    ],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок цього блоку',
            paragraphs: [
                'Програма, яку за традицією називають «Hello, world!», дуже проста. Вона виводить кудись фразу «Hello, world!», або іншу подібну, засобами якоїсь мови.',
                "JavaScript - це мова, програми на якій можна виконувати в різних середовищах. У нашому випадку йдеться про браузери і про серверну платформу Node.js. Якщо досі ви не написали жодного рядка коду на JS і читаєте цей текст у браузері, на настільний комп'ютер, це означає, що ви буквально за лічені секунди від своєї першої JavaScript-програми.",
                'Існують інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Як правило, код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати і безпосередньо в код сторінки.Все це робиться за допомогою тега <script>.Коли браузер виявляє такий код, він виконує його.Подробиці про тег script можна переглянути на сайті w3school.com. , розглянемо приклад, що демонструє роботу з веб-сторінкою засобами JavaScript, наведений на цьому ресурсі.Цей приклад можна запустити і засобами даного ресурсу (шукайте кнопку Try it Yourself), але ми зробимо трохи інакше, а саме, створимо в якомусь текстовому редакторі (наприклад — у VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо в нього наступний код:',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n <body>\n <p id="hello"></p>\n\n <script>\n document.getElementById("hello").innerHTML = "Hello, world!";\n</script>\n</body>\n</html>;',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок цього блоку',
            paragraphs: [
                'Програма, яку за традицією називають «Hello, world!», дуже проста. Вона виводить кудись фразу «Hello, world!», або іншу подібну, засобами якоїсь мови.',
                'Існують інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Як правило, код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати і безпосередньо в код сторінки.Все це робиться за допомогою тега <script>.Коли браузер виявляє такий код, він виконує його.Подробиці про тег script можна переглянути на сайті w3school.com. , розглянемо приклад, що демонструє роботу з веб-сторінкою засобами JavaScript, наведений на цьому ресурсі.Цей приклад можна запустити і засобами даного ресурсу (шукайте кнопку Try it Yourself), але ми зробимо трохи інакше, а саме, створимо в якомусь текстовому редакторі (наприклад — у VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо в нього наступний код:',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://placehold.co/300x200',
            title: 'Малюнок 1 - скріншот сайту',
        },
        {
            id: '3',
            type: ArticleBlockType.CODE,
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json')) ;\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок цього блоку',
            paragraphs: [
                "JavaScript - це мова, програми на якій можна виконувати в різних середовищах. У нашому випадку йдеться про браузери і про серверну платформу Node.js. Якщо досі ви не написали жодного рядка коду на JS і читаєте цей текст у браузері, на настільний комп'ютер, це означає, що ви буквально за лічені секунди від своєї першої JavaScript-програми.",
                'Існують інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Як правило, код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати і безпосередньо в код сторінки.Все це робиться за допомогою тега <script>.Коли браузер виявляє такий код, він виконує його.Подробиці про тег script можна переглянути на сайті w3school.com. , розглянемо приклад, що демонструє роботу з веб-сторінкою засобами JavaScript, наведений на цьому ресурсі.Цей приклад можна запустити і засобами даного ресурсу (шукайте кнопку Try it Yourself), але ми зробимо трохи інакше, а саме, створимо в якомусь текстовому редакторі (наприклад — у VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо в нього наступний код:',
            ],
        },
        {
            id: '8',
            type: ArticleBlockType.IMAGE,
            src: 'https://placehold.co/2000x1000',
            title: 'Малюнок 2 - велике зображення',
        },
        {
            id: '9',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок цього блоку',
            paragraphs: [
                "JavaScript - це мова, програми на якій можна виконувати в різних середовищах. У нашому випадку йдеться про браузери і про серверну платформу Node.js. Якщо досі ви не написали жодного рядка коду на JS і читаєте цей текст у браузері, на настільний комп'ютер, це означає, що ви буквально за лічені секунди від своєї першої JavaScript-програми.",
            ],
        },
    ],
};

export const Normal: Story = {
    args: {},
};
Normal.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
})];
