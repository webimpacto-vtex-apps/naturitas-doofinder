import React, { Fragment } from 'react'
import ReactDOMServer from 'react-dom/server';
import styles from '../style.css'
import "../global.css"

const doofinderTemplateComponent = (
    <div className={styles[`df-embedded`]} id="vtex-embedded" hidden>
        <div className={styles[`df-banner`]} id="df-banner__vtex-embedded"></div>
        <div className={styles[`df-embedded__content`]} >
            <div className={styles[`df-aside`]} id="df-aside__vtex-embedded" data-role="aside"></div>
            <div className={styles[`df-main`]} >
                <div id="df-header__vtex-embedded"></div>
                <div className={styles[`df-results`]} id="df-results__vtex-embedded" data-role="result-list"></div>
                <div id="df-pager__vtex-embedded"></div>
            </div>
        </div>
    </div>
)

const doofinderResultsTemplateComponent =
    <Fragment>
        {`{{#results}}`}
        <div className={styles[`df-card`]} data-role="result" data-id="{{id}}">
            {`{{#image_link}}`}
            <div className="discounts" data-id="{{id}}"><div className="triangle"><div className="discounts-container"></div></div></div>
            <a className={styles['df-card__main']} href="{{#url-params}}{{{link}}}{{/url-params}}" data-role="result-link" data-dfid="{{dfid}}">
                <figure className={styles["df-card__image"]}>
                    <img src="{{#remove-protocol}}{{image_link}}{{/remove-protocol}}" alt="{{title}}" />
                </figure>
            </a>
            {`{{/image_link}}`}
            <div className="df-card__brand" data-id="{{id}}"></div>
            <div className={styles["df-card__title"]} data-title="{{id}}">{`{{title}}`}</div>
            <div className="subtitle" data-title="{{id}}"></div>
            <span className="valoracion-product  " data-id="{{#id}}{{id}}{{/id}}" data-reviews="{{reviews_data}}"><span className="porcentaje"><span className="quantity-porcentaje"></span></span></span>
            {`{{#price}}`}
            <div className={styles["df-card__pricing"]} data-id="{{#id}}{{id}}{{/id}}">
                <span className={`${styles['df-card__price']} {{#g:original_price}}${styles['df-card__price--old']}{{/g:original_price}}`}>
                    {`{{g:original_price}}`} €
                        </span>
                <span className="df-card__price df-card__price--new original-price" data-id="{{#id}}{{id}}{{/id}}">
                    {`{{price}}`} €
                        </span>
            </div>
            {`{{/price}}`}
            <div className="df-addtocartmb">
                <a href="{{#url-params}}{{link}}{{/url-params}}" className="my-df-addtocart-btn btn-cart btn" data-addtocart="{{id}}">
                    </a>
                <a className="btn btn-primary addToCart" data-id="{{#id}}{{id}}{{/id}}"></a>
                <div></div>
            </div>
        </div>
        {`{{/results}}`}
        {`{{^results}}`}
          <div className="searchresult-block content">
            <div className="searchresult-image-container">
              <img src="https://naturitasit.vteximg.com.br/assets/vtex.file-manager-graphql/images/oops.png" />
            </div>
            <div className="searchresult-title-container">
              <p className="title">{`{{#translate}}not-found-title{{/translate}}`}</p>
            </div>
            <div className="searchresult-subtitle-container">
              <p>{`{{#translate}}not-found-subtitle1{{/translate}}`}</p>
              <p>{`{{#translate}}not-found-subtitle2{{/translate}}`}</p>
            </div>
            <div className="searchresult-tips-container">
              <ul>
                <li>{`{{#translate}}not-found-tip1{{/translate}}`}</li>
                <li>{`{{#translate}}not-found-tip2{{/translate}}`}</li>
                <li>{`{{#translate}}not-found-tip3{{/translate}}`}</li>
              </ul>
            </div>
          </div>
        {`{{/results}}`}
    </Fragment>

const doofinderFacetsTemplateComponent = (
    <div className={`${styles["df-panel"]} df-panel df-panel-collapse`} id="{{panelElement}}"
        data-role="panel" data-facet="{{name}}">
        <a className={styles["df-panel__title"]} id="{{labelElement}}"
            data-role="panel-label" data-toggle="panel"
            href="#">
            {`{{ label }}`}
        </a>
        <div className={`${styles["df-panel__content"]} df-panel__content`} id="{{contentElement}}" data-role="panel-content"></div>
    </div>
)

export const doofinderFacetsTemplate = ReactDOMServer.renderToString(doofinderFacetsTemplateComponent);
export const doofinderResultsTemplate = ReactDOMServer.renderToString(doofinderResultsTemplateComponent);
export const doofinderTemplate = ReactDOMServer.renderToString(doofinderTemplateComponent);
