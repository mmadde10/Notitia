import * as Jest from 'jest';
import * as htmlDocument from '../src/htmlDocument';
import * as cheerio from 'cheerio';

//Test Data
let contents = `
<html lang = "en-US">
<head>
<title>On the waterfront: Pros and cons</title>
<link rel="canonical" href="https://www.guaranteedrate.com/resources/on-the-waterfront-pros-cons">
<meta name="article.id" content="SB11127086588721843514904583490260217640472">
<style>
    p{}
</style>
<body>
    <article>
    <h1>On the waterfront: Pros and cons</h1>
        <div class="wrapper">
        <div class="socialLinksWrapper">
            <aside class="socialLinks">
                <div class="articleLabel">Share</div> 
                <a data-track="articleMod-facebookButton" data-social-type="facebook" class="btn btn-default btn-raised no-decoration" href="http://www.facebook.com/share.php?u=https://www.guaranteedrate.com/resources/on-the-waterfront-pros-cons&amp;title=On the waterfront: Pros &amp; cons" target="_blank"><i class="fa fa-facebook"></i></a>
                <a data-track="articleMod-twitterButton" data-social-type="twitter" class="btn btn-default btn-raised no-decoration" href="http://twitter.com/intent/tweet?status=On the waterfront: Pros &amp; cons+https://www.guaranteedrate.com/resources/on-the-waterfront-pros-cons" target="_blank"><i class="fa fa-twitter"></i></a>
                <a data-track="articleMod-linkedinButton" data-social-type="linkedin" class="btn btn-default btn-raised no-decoration" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.guaranteedrate.com/resources/on-the-waterfront-pros-cons&amp;title=On the waterfront: Pros &amp; cons&amp;source=rate.com" target="_blank"><i class="fa fa-linkedin"></i></a>
            </aside>
        </div>
        <div>
            <div class="author articleLabel">By Nick Van Heest on 9/6/2017</div>
            <div class="tags articleLabel">
            Tags: 
                <a href="/article-search/?search={%22tags%22:%22before-you-buy%22}" data-track="articleMod-tag-before you buy">before you buy</a>
                <a href="/article-search/?search={%22tags%22:%22buying-a-home-2%22}" data-track="articleMod-tag-buying a home">buying a home</a>
                <a href="/article-search/?search={%22tags%22:%22dream-home%22}" data-track="articleMod-tag-dream home">dream home</a>
                <a href="/article-search/?search={%22tags%22:%22jumbo-loan%22}" data-track="articleMod-tag-jumbo loan">jumbo loan</a>

            </div>
            <div class="top socialLinks">
                <div class="articleLabel">Share </div> 
                <a data-track="articleMod-facebookButton" data-social-type="facebook" class="btn btn-default btn-raised no-decoration" href="http://www.facebook.com/share.php?u=https://www.guaranteedrate.com/resources/on-the-waterfront-pros-cons&amp;title=On the waterfront: Pros &amp; cons" target="_blank"><i class="fa fa-facebook"></i></a>
                <a data-track="articleMod-twitterButton" data-social-type="twitter" class="btn btn-default btn-raised no-decoration" href="http://twitter.com/intent/tweet?status=On the waterfront: Pros &amp; cons+https://www.guaranteedrate.com/resources/on-the-waterfront-pros-cons" target="_blank"><i class="fa fa-twitter"></i></a>
                <a data-track="articleMod-linkedinButton" data-social-type="linkedin" class="btn btn-default btn-raised no-decoration" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.guaranteedrate.com/resources/on-the-waterfront-pros-cons&amp;title=On the waterfront: Pros &amp; cons&amp;source=rate.com" target="_blank"><i class="fa fa-linkedin"></i></a>
            </div>
            <div class="richText"> 
            <p style="text-align: center;">
            <img class="aligncenter" src="https://dih4lvql8rjzt.cloudfront.net/cms/ae3a8c69-a81f-4c62-9563-5eeecbb42223_waterfronthome.jpg" width="700">
            </p>
            <p>Fresh air. Ruby sunsets over the sparkling horizon. Swimming, fishing and boating adventures. Whether an oceanfront estate or a lakeside cabin is in your crosshairs, living by the shore can be packed with enchantment. However, as a homebuyer, you need to know what you’re getting into before taking the plunge—here are a few pros and cons to the waterfront life.</p>
            <p>
            <strong>Aquatic advantages </strong>
            </p>
            <p>Return on investment: Featuring low supply and high demand, waterfront homes are a limited resource. If you ever decide to sell, your profit potential is enormous. Even in a volatile real estate market, these homes tend to retain their value and appreciate steadily.</p>
            <p>In the 1980s, the median value of waterfront properties across the US was 64% higher than that of all homes. Today, the difference has grown to 116%. While California coastline is substantially more valuable than Florida swampland, waterfront homes are worth more than twice the average value of homes overall.*</p>
            <p>Healthy lifestyle: You can’t put a price tag on the magic of the sea. From sport and recreation to improved air quality and picture-perfect views, living on the water can benefit your body and soul. Take up wakeboarding. Kayak down the coastline. Sunbathe on the edge of your dock. The opportunities are endless!</p>
            <p>Privacy: There’s nothing like your very own private beach. Traffic, parking (often at a price), obnoxious beachgoers and piles of sand in your car—the public beach can be an all-day ordeal. On the other hand, your private beachfront offers convenience, peace and quiet in spades.</p>
            <p><strong>Harborside headaches </strong>
            </p>
            <p>Premium prices: Waterfront homes generally feature stiff purchase prices—the downside of stout return on investment. The most expensive are located in Hawaii, Southern California and New York City, while the cheapest can be found in Florida and the Midwest. Residential lots with more distance between the home and the shoreline—with a clear line of sight to the water—are usually more expensive than those right on the water. These often entail a bigger backyard, more privacy and less risk of property damage.</p>
            <p>Maintenance: From extreme humidity to flash flooding, waterfront conditions can warp and rot wood, rust metal and erode stone. Damp conditions can wear out painted and stained surfaces and cause your basement drywall to grow mold and break apart. Eyeing a spot on the ocean? Salt in the air can be even harder on the property. Before you buy, hire a qualified home inspector to scrutinize the home from top to bottom. Keep an eye out for mold, mildew and invasive species.</p>
            <p>Insurance: Your <a href="https://www.guaranteedrate.com/resources/3-not-so-obvious-ways-you-could-pay-less-for-home-insurance">homeowner’s insurance</a> could be significantly higher on a waterfront home due to a higher risk of storm damage. Many homeowners are required to purchase flood, wind and general insurance.</p>
            <p><strong>Final word</strong>
            </p>
            <p>Whether you’re buying or selling a waterfront home, be sure to work with an experienced real estate agent who understands the complexities of a waterfront transaction. Need to take out a loan to finance a beautiful home on the water? Guaranteed Rate’s <a href="https://www.guaranteedrate.com/resources/financing-your-forever-home-3-keys-to-jumbo-loans">jumbo program</a> features low rates, 90% loan-to-value ARM options up to $1 million and financing up to $5 million.</p>
            <p>Living on a lake, river or ocean certainly comes with its fair share of expenses and complications. However, if you have the means to reside seaside, don’t underestimate the power of the sea. As renowned oceanographer Jacques Cousteau once said:</p>
            <p>“The sea, once it casts its spell, holds you in its net of wonder forever.”</p>
            <p>Source: *<a href="https://www.zillow.com/research/what-is-waterfront-worth-7540/">https://www.zillow.com/research/what-is-waterfront-worth-7540/</a></p>
            </div>
            </div>
            </div>
    </article>
    <footer class="footer-content-container" itemtype="http://schema.org/WPFooter">
    <div class="container">
            

<div class="graMainFooterNavMod row basic-module">

<div class="backToTop visible-xs itemWrapper">
    <a class="itemLabel" href="#top">BACK TO TOP</a>
</div>
<div class="top">
    <div class="col-md-2 col-lg-1 hidden-xs">
        <a class="grLogo__main" itemprop="url" href="https://www.grarate.com">
            <img itemprop="logo" alt="" src="http://s3.amazonaws.com/grate-cms/d9372dbc-3a87-48c2-89c6-007d57f55931_gr-logo-dark-responsive.svg">
        </a>
    </div>
</div>

<div class="bottom">
    <a class="grLogo visible-xs" href="https://www.grarate.com">
        <img alt="" src="http://s3.amazonaws.com/grate-cms/d9372dbc-3a87-48c2-89c6-007d57f55931_gr-logo-dark-responsive.svg">
    </a>
        <ul class="inlineList navList ">
                <li>
                    <a data-track="footer-find-loan-officer" href="/find-loan-officer">Find a Loan Expert</a>
                </li>
                <li>
                    <a data-track="footer-site-map" href="/sitemap">Site Map</a>
                </li>
                <li>
                    <a data-track="footer-licensing" href="/licensing">Licensing</a>
                </li>
                <li>
                    <a data-track="footer- disclaimer" href="/disclaimer"> Disclaimer</a>
                </li>
                <li>
                    <a data-track="footer-terms-of-use" href="/terms"> Terms of Use</a>
                </li>
                <li>
                    <a data-track="footer- privacy-policy" href="/privacy-policy"> Privacy Policy</a>
                </li>
                <li>
                    <a data-track="footer-insurance" href="http://www.guaranteedrateinsurance.com/">Insurance</a>
                </li>
        </ul>
</div>

</div>    
    <div class="footNoteMod smallLegal basic-module">
        <center>
        <p>Copyright © 2000-2017 Guaranteed Rate. All rights reserved.</p> 
        <img src="https://dih4lvql8rjzt.cloudfront.net/cms/af99fb6e-97ea-4823-9925-97e95ce0bc01_ehl-logo-dark.svg" style="width:150px">
        <p>Illinois Residential Mortgage Licensee NMLS License #2611<br> 3940 N. Ravenswood Chicago, IL 60613 - (866) 934-7283<br></p>
            <ul class="inlineList">
                        <li><a target="_blank" title="NMLS Consumer Access" href="http://www.nmlsconsumeraccess.org/">NMLS Consumer Access </a></li>
                        <li><a target="_blank" title="Texas Consumers: How to File a Complaint" href="https://texreg.sos.state.tx.us/fids/201203137-2.pdf">Texas Consumers: How to File a Complaint</a></li>
                        <li><a target="_blank" title="Delaware Licensed Loan Officers" href="https://s3.amazonaws.com/grate-cms/6fb10cb0-58df-4ad6-9766-b606eb73d88a_GRI_DE_licensed_MLOs_PDF_10.20.16.pdf">Delaware Licensed Loan Officers</a></li>
            </ul>
        </center>
    </div>
</footer>
    <body>
</html>`;

/*
End of Test Data

Start of Tests
*/

const heads = new htmlDocument.Head();
const bodies = new htmlDocument.Body();
const documents = new htmlDocument.HTML(contents);
const style = new htmlDocument.Style();


describe('HTML Object', () => {
    
    let $ = documents.loadDocument(contents);

    test('Is document Loaded', () => {
        let $$ = documents.loadDocument(contents);
        //console.log(`Document: ${$$}\n`);
      expect($$).not.toBeNull();
    });
    test('Is HTML Selected?', () => {
        let documentHTML = documents.getElement($);
        //console.log(`HTML: ${documentHTML}\n`);
        expect(documentHTML).not.toBeNull();
    });
    test('Is language Found?', () => {
        let languange = documents.getLanguage($);
        //console.log(`Language: ${languange}\n`);
        expect(languange).not.toBeNull();
    });
});

describe('Head Object', () => {

    let $ = documents.loadDocument(contents);
    test('Find head Element', () => {
        let head = heads.getElement($);
        //console.log(`Head: ${head}`);
        expect(head).not.toBeNull();
    });
    test('Getting Meta Data', () => {
        let meta = heads.getMetaData($);
        //console.log(`Meta Cononical:${meta.canonical}, Meta Title\n${meta.title}`);
        expect(meta).not.toBeNull();
    });

});

describe('Body Object', () => {

    let $ = documents.loadDocument(contents);

    test('Get Body Element', () => {
        let body = bodies.getElement($);
        //console.log(`Body:\n ${body}`);
        expect(body).not.toBeNull();
    });
    test('Get Article Data', () => {
        let articleData = bodies.getArticleData($);
        //console.log(`Article Title: ${articleData.articleTitle}\nArticle Author:${articleData.articleAuthor}\nArticle Date:${articleData.articleDate}`);
//console.log(`Social Media: ${articleData.socialMedia}`);
        expect(articleData).not.toBeNull();
    });
    test('Getting Article Content', () => {
        let articleContent = bodies.getArticleContent($);
        //console.log(`Article Content:\n${articleContent}`);
        expect(articleContent).not.toBeNull();
    });
    test('Getting Article Media', () => {
        let articleMedia = bodies.getMedia($);
        //console.log(`Article img: ${articleMedia.img}\n Article video: ${articleMedia.video}`);
        expect(articleMedia).not.toBeNull();
    });
});

describe('Style Object', () => {
    let $ = documents.loadDocument(contents);
    test('Getting Style', () => {
        let styles = style.getElement($);
        //console.log(`Style:\n${styles}`);
        expect(styles).not.toBeNull();
    });
});
