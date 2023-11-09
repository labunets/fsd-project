import { Article } from '../../../src/5entities/Article';

const defaultArticle = {
    title: 'TESTING ARTICLE',
    subtitle: 'Biology',
    img: 'https://placehold.co/600x400?text=Python',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
        'SCIENCE',
    ],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8008/articles',
        headers: { Authorization: 'asasf' },
        body: article ?? defaultArticle,
    }).then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8008/articles/${articleId}`,
        headers: { Authorization: 'asasf' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
