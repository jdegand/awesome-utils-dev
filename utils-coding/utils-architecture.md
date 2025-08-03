<h1>ENGINEERING/ARCHITECTURE</h1>
<h2>API MANAGEMENT</h2>
<ul>
<li><a href="https://tyk.io/">https://tyk.io/</a></li>
</ul>
<h2>API NORMALIZATION</h2>
<ul>
<li><a href="https://app.swaggerhub.com">https://app.swaggerhub.com</a></li>
</ul>
<h2>OSS</h2>
<ul>
<li><a href="https://github.com/joelparkerhenderson/architecture-decision-record">https://github.com/joelparkerhenderson/architecture-decision-record</a></li>
<li><a href="https://github.com/andreschaffer/event-sourcing-cqrs-examples">https://github.com/andreschaffer/event-sourcing-cqrs-examples</a></li>
<li><a href="https://github.com/joelparkerhenderson/monorepo-vs-polyrepo">https://github.com/joelparkerhenderson/monorepo-vs-polyrepo</a></li>
<li><a href="https://github.com/Coder-World04/Complete-System-Design">https://github.com/Coder-World04/Complete-System-Design</a></li>
<li><a href="https://github.com/ivan-bilan/The-Microservices-Pandect">https://github.com/ivan-bilan/The-Microservices-Pandect</a></li>
<li><a href="https://github.com/mhadidg/software-architecture-books">https://github.com/mhadidg/software-architecture-books</a></li>
<li><a href="https://github.com/ZachGoldberg/Startup-CTO-Handbook">https://github.com/ZachGoldberg/Startup-CTO-Handbook</a></li>
<li><a href="https://github.com/donnemartin/system-design-primer">https://github.com/donnemartin/system-design-primer</a></li>
<li><a href="https://github.com/sindresorhus/system-architecture">https://github.com/sindresorhus/system-architecture</a></li>
<li><a href="https://github.com/karanpratapsingh/system-design">https://github.com/karanpratapsingh/system-design</a></li>
<li><a href="https://github.com/ByteByteGoHq/system-design-101">https://github.com/ByteByteGoHq/system-design-101</a></li>
<li><a href="https://github.com/Sairyss/domain-driven-hexagon">https://github.com/Sairyss/domain-driven-hexagon</a></li>
<li><a href="https://github.com/denyspoltorak/publications">https://github.com/denyspoltorak/publications</a></li>
</ul>
<h2>DDD / CQRS</h2>
<ul>
<li><a href="https://speakerdeck.com/akrabat/ddd-for-beginners">https://speakerdeck.com/akrabat/ddd-for-beginners</a></li>
<li><a href="http://blog.octo.com/cqrs-larchitecture-aux-deux-visages-partie-1/">http://blog.octo.com/cqrs-larchitecture-aux-deux-visages-partie-1/</a></li>
</ul>
<h2>BOOKS</h2>
<ul>
<li><a href="https://leanpub.com/theengineeringplaybook">https://leanpub.com/theengineeringplaybook</a></li>
</ul>
<h2>ARTICLES</h2>
<ul>
<li><a href="https://ducin.dev/what-is-frontend-architecture">https://ducin.dev/what-is-frontend-architecture</a></li>
<li><a href="https://blog.ippon.fr/2018/09/12/quest-ce-quun-metarchitecte/">https://blog.ippon.fr/2018/09/12/quest-ce-quun-metarchitecte/</a></li>
<li><a href="https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code">https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code</a></li>
<li><a href="https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/tech-debt-reclaiming-tech-equity">https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/tech-debt-reclaiming-tech-equity</a></li>
</ul>
<h2>AUTHENTICATION</h2>
<p>It's important to integrate from the beginning a clean architecture for the authentication and roles for the project. for instance using a CAS, SAML, OAuth2(JWT)/OpenID, PassportJS...</p>
<h2>DATA MANIPULATION</h2>
<p>Whether writing websites, softwares, apps or anything involving sending data back and forth there’s always this chore to serialize/deserialize from one format to another, whether it be JS object to/from JSON, plain JS object to/from typed JS class object, Java POJO to/from JSON,  AMF, Protobuf, XML, YML, etc… Now aside from serialization/deserialization, there’s also this fact that some data can cross boundaries or not. Boundaries can be anything like your backend as opposed to your frontend for example. So there’s also this one another chore like sanitization and hydration :</p>
<ul>
<li>sanitization : best example here would be the password from your user which is typically the data that you want to strip away from being inadvertently sent to your frontend.</li>
<li>hydration : reverse process, when sometimes you receive user data from the frontend and want to feed its missing properties from database to carry out some more logic. And so what ? So it’s a lot of boilerplate</li>
</ul>
<h2>OPINION</h2>
<p>-sql: create table with prefix for the project + prefix for the order ex: box_001_member / box_001_event.. It helps to scale and to understand...<br>
-code: create a custom facade for all the important modules. ex: CustomHttp, CustomStore, CustomModal... It helps to scale, refactor, migrate to new modules...<br>
-code: create a base component with all the common code inside. ex in Angular create a BaseComponent in order to manage the onDestroy and to inject all the very used services.</p>