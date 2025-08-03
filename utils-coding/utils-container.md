<h1>CONTAINER</h1>
<ul>
<li>
<p>Vagrant, Docker, Podman let you create portable environments Vagrant helps you set up entire virtual machines to run your applications, Docker/Podman allows you to package an application with its environment and all of its dependencies into a "box", called a container. They both adapted to OCI (Open Container Initiative) standards for images. Usually, a container consists of an application running in a stripped-to-basics version of a Linux operating system. An image is the blueprint for a container, a container is a running instance of an image. Virtual Machine vs Container: VM is complete. Container is closer to the host machine. No emulation of hardware. We share a part of the hardware. disk, network. To do that we segment the harware.</p>
</li>
<li>
<p>Docker provides a system-agnostic approach that can create containerized applications across any platform. Podman is a rootless and daemon-less container built explicitly by RedHat to make it better than Docker. Non-root users, too, can use Podman container-based applications.</p>
</li>
<li>
<p>Openshift: receives config file and go to pull docker image on nexus to do the deployment. Internal access or external access: Cloudflare can protect external access but not necessary on internal access. There is one BigIP cluster for each access: internal/external, they are responsible to do the load balancing.</p>
</li>
<li>
<p>Logging: Fluentd to do the bridge between different log producers. see: kibana, elastic, prometheus (host, memory, cpu, disk), prtg, shinken, pingdom</p>
</li>
</ul>
<h2>ORCHESTRATION</h2>
<ul>
<li>Container orchestration automates the deployment, management, scaling, and networking of containers. OpenShift, Kubernetes, Apache Mesos or Docker Swarm. OpenShift is considered to be a distribution, that relies on Kubernetes and Helm because Kubernetes is the "kernel" of distributed systems and Helm, the tool for managing package called Charts, indeed a chart is a package of pre-configured Kubernetes resources. it streamlines installing and managing Kubernetes applications. A package contains a Chart.yaml + one or many templates which contain Kubernetes manifest files. Charts can be stored on disk, or fetched from remote chart repositories.</li>
</ul>
<p>Both Kubernetes and OpenShift are popular container management systems, and each has its unique features and benefits. While Kubernetes helps automate application deployment, scaling, and operations, OpenShift is the container platform that works with Kubernetes to help applications run more efficiently.</p>
<p>OpenShift Online leverages the Kubernetes concept of a pod, which is one or more containers deployed together on one host, and the smallest compute unit that can be defined, deployed, and managed. Pods are the rough equivalent of a machine instance (physical or virtual) to a container.</p>
<h2>UTILS</h2>
<ul>
<li><a href="https://github.com/project-copacetic/copacetic">https://github.com/project-copacetic/copacetic</a></li>
</ul>
<h2>DOCKER</h2>
<pre><code class="language-bash"># container id = cid // image id = iid
docker build . ==> Build the default local Dockerfile
docker build -f Dockerfile.ssr . ==> Build a specific local Dockerfile
docker logs &#x3C;cid> ==> Displays the container logs
docker run -it $(docker build -q .) ==> Build &#x26; Run inline the image in localhost
docker run -p 4200:8080 -d iid ==> Run the image in localhost
docker run -p 4000:4000 -h host.com -d iid ==> Run the image in host.com
docker run -p 4000:4000 -h host.com -v /host/path/to/certs:/container/path/to/certs -d iid "update-ca-certificates" ==> Run the image in host.com with certificate
docker top cid ==> Displays the containers running processes
docker port cid ==> Lists containers port mappings
docker kill cid ==> Kills the process but its not ideal
docker diff cid ==> check changes to files&#x26;didirectories
</code></pre>
<h2>PODMAN</h2>
<ul>
<li>
<p>The most important options when using podman are:<br>
-v (volume) (build|run) which allows to bind volume between the host and the container like this: -v /HOST-DIR:/CONTAINER-DIR. both directories must be absolute. you can use pwd to target the root of the current directory, you can use multiple times the option to mount multiple volumes. ex: -v $(pwd):/opt/apptobuild:U -v $(pwd)/conf:/conf:U<br>
-e (env) (build|run) to pass environment variable to the build or to the process to be run. beware it's quite different behavior between build and run, of course you can use multiple times the option, ex: -e 'spring.profiles.active=dev' -e 'spring.config.location=file:conf/application.properties,file:conf/credential.properties'<br>
-t (tag) (build) simply to define a name to the resulting image if the build process completes successfully. ex: -t appname:type<br>
-f (file) (build) simply to target a custom docker file name different than the classic local Dockerfile. usually it can be to specify a custom local file with an extension type like for the frontend image: Dockerfile.fedev. It can alo be an url with http or https</p>
</li>
<li>
<p><a href="https://docs.podman.io/en/latest/markdown/podman-build.1.html">https://docs.podman.io/en/latest/markdown/podman-build.1.html</a></p>
</li>
<li>
<p><a href="https://docs.podman.io/en/latest/markdown/podman-run.1.html">https://docs.podman.io/en/latest/markdown/podman-run.1.html</a></p>
</li>
<li>
<p><a href="https://docs.podman.io/en/latest/markdown/podman-volume.1.html">https://docs.podman.io/en/latest/markdown/podman-volume.1.html</a></p>
</li>
<li>
<p><a href="https://www.orpiske.net/2021/10/configuring-intellij-to-work-with-podman/">https://www.orpiske.net/2021/10/configuring-intellij-to-work-with-podman/</a></p>
</li>
<li>
<p><a href="https://www.lemagit.fr/conseil/Conteneurisation-les-differences-cles-entre-Docker-et-Podman">https://www.lemagit.fr/conseil/Conteneurisation-les-differences-cles-entre-Docker-et-Podman</a></p>
</li>
<li>
<p><a href="https://www.imaginarycloud.com/blog/podman-vs-docker/">https://www.imaginarycloud.com/blog/podman-vs-docker/</a></p>
</li>
<li>
<p><a href="https://github.com/containers/podman-compose">https://github.com/containers/podman-compose</a></p>
</li>
</ul>
<h2>OPENSHIFT</h2>
<p>You need two things</p>
<ul>
<li>OpenShift CLI </li>
<li>Helm CLI</li>
</ul>
<h2>KUBERNETES</h2>
<ul>
<li><a href="https://www.redhat.com/fr/topics/containers/learning-kubernetes-tutorial">https://www.redhat.com/fr/topics/containers/learning-kubernetes-tutorial</a></li>
<li><a href="https://www.ionos.fr/digitalguide/serveur/configuration/tutoriel-kubernetes/">https://www.ionos.fr/digitalguide/serveur/configuration/tutoriel-kubernetes/</a></li>
<li><a href="https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-interactive/">https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-interactive/</a></li>
</ul>
<h2>VAGRANT</h2>
<pre><code class="language-bash"># ensure that .vagrant/machines/default/virtualbox/creator_uid is 0
sudo vagrant up
sudo vagrant halt
sudo vagrant ssh
sudo yum -y install phpmyadmin
mysql -u root example -- just test
ifconfig (add IP ADRESS 192.168.50.52 + remote DENY )
# KEYS: INSERT +  CTRL C + :w + :q
sudo vim /etc/httpd/conf.d/phpMyAdmin.conf
sudo service httpd restart
</code></pre>
<pre><code class="language-bash">vim /etc/phpMyAdmin/config.inc.php

$cfg['Servers'][$i]['AllowNoPassword'] = TRUE;
+ MODIFY USER : root + secret

http://192.168.50.52/phpmyadmin 
root secret
exit
</code></pre>
<h2>DEBUG</h2>
<pre><code class="language-bash">RUN echo "PWD is: $PWD"
RUN ls
</code></pre>
<h2>TOOLS ALL</h2>
<ul>
<li><a href="https://www.portainer.io/">https://www.portainer.io/</a></li>
</ul>
<h2>TOOLS OSS</h2>
<ul>
<li><a href="https://github.com/kubernetes/kubernetes">https://github.com/kubernetes/kubernetes</a></li>
<li><a href="https://github.com/cyclops-ui/cyclops">https://github.com/cyclops-ui/cyclops</a></li>
<li><a href="https://github.com/psviderski/uncloud">https://github.com/psviderski/uncloud</a></li>
<li><a href="https://github.com/orbstack/orbstack">https://github.com/orbstack/orbstack</a></li>
<li><a href="https://github.com/containers/podman">https://github.com/containers/podman</a></li>
<li><a href="https://github.com/hashicorp/vagrant">https://github.com/hashicorp/vagrant</a></li>
<li><a href="https://github.com/apple/container">https://github.com/apple/container</a></li>
<li><a href="https://github.com/earthly/earthly">https://github.com/earthly/earthly</a></li>
<li><a href="https://github.com/nestybox/sysbox">https://github.com/nestybox/sysbox</a></li>
<li><a href="https://github.com/abiosoft/colima">https://github.com/abiosoft/colima</a></li>
<li><a href="https://github.com/crazy-max/diun">https://github.com/crazy-max/diun</a></li>
<li><a href="https://github.com/xpipe-io/xpipe">https://github.com/xpipe-io/xpipe</a></li>
<li><a href="https://github.com/nxthat/nnocl">https://github.com/nxthat/nnocl</a></li>
<li><a href="https://github.com/orbstack">https://github.com/orbstack</a></li>
<li><a href="https://github.com/openshift">https://github.com/openshift</a></li>
<li><a href="https://github.com/docker">https://github.com/docker</a></li>
</ul>
<h2>DOCKER ALL</h2>
<ul>
<li><a href="https://github.com/depot/cli">https://github.com/depot/cli</a></li>
<li><a href="https://github.com/quay/clair">https://github.com/quay/clair</a></li>
<li><a href="https://github.com/docker/labs">https://github.com/docker/labs</a></li>
<li><a href="https://github.com/wagoodman/dive">https://github.com/wagoodman/dive</a></li>
<li><a href="https://github.com/qdm12/devtainr">https://github.com/qdm12/devtainr</a></li>
<li><a href="https://github.com/louislam/dockge">https://github.com/louislam/dockge</a></li>
<li><a href="https://github.com/croqaz/browsers">https://github.com/croqaz/browsers</a></li>
<li><a href="https://github.com/NilsIrl/dockerc">https://github.com/NilsIrl/dockerc</a></li>
<li><a href="https://github.com/slimtoolkit/slim">https://github.com/slimtoolkit/slim</a></li>
<li><a href="https://github.com/will-moss/isaiah">https://github.com/will-moss/isaiah</a></li>
<li><a href="https://github.com/vrnetlab/vrnetlab">https://github.com/vrnetlab/vrnetlab</a></li>
<li><a href="https://github.com/devcontainers/spec">https://github.com/devcontainers/spec</a></li>
<li><a href="https://github.com/aquasecurity/trivy">https://github.com/aquasecurity/trivy</a></li>
<li><a href="https://github.com/containerd/nerdctl">https://github.com/containerd/nerdctl</a></li>
<li><a href="https://github.com/railwayapp/nixpacks">https://github.com/railwayapp/nixpacks</a></li>
<li><a href="https://github.com/Wowu/docker-rollout">https://github.com/Wowu/docker-rollout</a></li>
<li><a href="https://github.com/goodwithtech/dockle">https://github.com/goodwithtech/dockle</a></li>
<li><a href="https://github.com/antoniomika/pcompose">https://github.com/antoniomika/pcompose</a></li>
<li><a href="https://github.com/louislam/docker-boot">https://github.com/louislam/docker-boot</a></li>
<li><a href="https://github.com/ameerthehacker/envase">https://github.com/ameerthehacker/envase</a></li>
<li><a href="https://github.com/rcjsuen/dockerfile-ast">https://github.com/rcjsuen/dockerfile-ast</a></li>
<li><a href="https://github.com/composerize/composerize">https://github.com/composerize/composerize</a></li>
<li><a href="https://github.com/sigp/lighthouse-metrics">https://github.com/sigp/lighthouse-metrics</a></li>
<li><a href="https://github.com/crazy-max/swarm-cronjob">https://github.com/crazy-max/swarm-cronjob</a></li>
<li><a href="https://github.com/docker-slim/docker-slim">https://github.com/docker-slim/docker-slim</a></li>
<li><a href="https://github.com/jesseduffield/lazydocker">https://github.com/jesseduffield/lazydocker</a></li>
<li><a href="https://github.com/leighmcculloch/dockerhost">https://github.com/leighmcculloch/dockerhost</a></li>
<li><a href="https://github.com/ContainerSSH/ContainerSSH">https://github.com/ContainerSSH/ContainerSSH</a></li>
<li><a href="https://github.com/tomMoulard/make-my-server">https://github.com/tomMoulard/make-my-server</a></li>
<li><a href="https://github.com/buildkite/docker-puppeteer">https://github.com/buildkite/docker-puppeteer</a></li>
<li><a href="https://github.com/ufoscout/docker-compose-wait">https://github.com/ufoscout/docker-compose-wait</a></li>
<li><a href="https://github.com/cloudflare/serverless-registry">https://github.com/cloudflare/serverless-registry</a></li>
<li><a href="https://github.com/chrislevn/dockerfile-practices">https://github.com/chrislevn/dockerfile-practices</a></li>
<li><a href="https://github.com/geerlingguy/ansible-role-docker">https://github.com/geerlingguy/ansible-role-docker</a>    </li>
<li><a href="https://github.com/JeremyLikness/usda-microservice">https://github.com/JeremyLikness/usda-microservice</a></li>
<li><a href="https://github.com/lucaslorentz/caddy-docker-proxy">https://github.com/lucaslorentz/caddy-docker-proxy</a></li>
<li><a href="https://github.com/felixfbecker/semantic-release-docker">https://github.com/felixfbecker/semantic-release-docker</a></li>
<li><a href="https://github.com/JonasAlfredsson/docker-nginx-certbot">https://github.com/JonasAlfredsson/docker-nginx-certbot</a></li>
<li><a href="https://labs.play-with-docker.com/">https://labs.play-with-docker.com/</a></li>
<li><a href="https://youtu.be/3c-iBn73dDE">https://youtu.be/3c-iBn73dDE</a> Docker Tutorial for Beginners [Full Course in 3 Hours]</li>
<li><a href="https://dev.to/softchris/5-part-docker-series-beginner-to-master-3m1b">https://dev.to/softchris/5-part-docker-series-beginner-to-master-3m1b</a></li>
<li><a href="https://dzone.com/articles/build-and-deploy-a-mongodb-angular-nodejs-app-usin">https://dzone.com/articles/build-and-deploy-a-mongodb-angular-nodejs-app-usin</a></li>
</ul>
<h2>DOCKER PROXY</h2>
<ul>
<li><a href="https://github.com/ciiiii/cloudflare-docker-proxy">https://github.com/ciiiii/cloudflare-docker-proxy</a></li>
<li><a href="https://github.com/rpardini/docker-registry-proxy">https://github.com/rpardini/docker-registry-proxy</a></li>
<li><a href="https://github.com/yegor256/squid-proxy">https://github.com/yegor256/squid-proxy</a></li>
</ul>
<h2>DOCKER IMAGE AWESOME</h2>
<ul>
<li><a href="https://github.com/docker/awesome-compose">https://github.com/docker/awesome-compose</a></li>
<li><a href="https://github.com/veggiemonk/awesome-docker">https://github.com/veggiemonk/awesome-docker</a></li>
<li><a href="https://github.com/devopstrainingblr/awesome-docker">https://github.com/devopstrainingblr/awesome-docker</a></li>
</ul>
<h2>DOCKER IMAGES UPDATE</h2>
<ul>
<li><a href="https://github.com/pgautoupgrade/docker-pgautoupgrade">https://github.com/pgautoupgrade/docker-pgautoupgrade</a></li>
<li><a href="https://github.com/containrrr/watchtower/">https://github.com/containrrr/watchtower/</a></li>
</ul>
<h2>DOCKER IMAGES: STATIC FILES</h2>
<ul>
<li><a href="https://github.com/nginxinc/docker-nginx">https://github.com/nginxinc/docker-nginx</a></li>
<li><a href="https://github.com/KyleAMathews/docker-nginx">https://github.com/KyleAMathews/docker-nginx</a></li>
<li><a href="https://github.com/lipanski/docker-static-website">https://github.com/lipanski/docker-static-website</a></li>
<li><a href="https://github.com/static-web-server/static-web-server">https://github.com/static-web-server/static-web-server</a></li>
<li><a href="https://github.com/docker/awesome-compose/tree/master/react-nginx">https://github.com/docker/awesome-compose/tree/master/react-nginx</a></li>
<li><a href="https://mav-rana.medium.com/containerize-a-simple-static-website-a381c5e49633">https://mav-rana.medium.com/containerize-a-simple-static-website-a381c5e49633</a></li>
</ul>
<h2>DOCKER IMAGES: AI</h2>
<ul>
<li><a href="https://github.com/remsky/Kokoro-FastAPI">https://github.com/remsky/Kokoro-FastAPI</a></li>
</ul>
<h2>DOCKER IMAGES ALL</h2>
<ul>
<li><a href="https://github.com/help-me-mom/wordpress-docker-template">https://github.com/help-me-mom/wordpress-docker-template</a></li>
<li><a href="https://github.com/NginxProxyManager/nginx-proxy-manager">https://github.com/NginxProxyManager/nginx-proxy-manager</a></li>
<li><a href="https://github.com/marcelo-ochoa/coder-docker-extension">https://github.com/marcelo-ochoa/coder-docker-extension</a></li>
<li><a href="https://github.com/expertly-simple/mrm-task-npm-docker">https://github.com/expertly-simple/mrm-task-npm-docker</a></li>
<li><a href="https://github.com/nginxinc/docker-nginx-unprivileged">https://github.com/nginxinc/docker-nginx-unprivileged</a></li>
<li><a href="https://github.com/linuxserver/docker-healthchecks">https://github.com/linuxserver/docker-healthchecks</a></li>
<li><a href="https://github.com/GoogleContainerTools/distroless">https://github.com/GoogleContainerTools/distroless</a></li>
<li><a href="https://github.com/DoTheEvo/selfhosted-apps-docker">https://github.com/DoTheEvo/selfhosted-apps-docker</a></li>
<li><a href="https://github.com/mpgirro/docker-pihole-unbound">https://github.com/mpgirro/docker-pihole-unbound</a></li>
<li><a href="https://github.com/jonatan-ivanov/local-services">https://github.com/jonatan-ivanov/local-services</a></li>
<li><a href="https://github.com/linuxserver/docker-wireshark">https://github.com/linuxserver/docker-wireshark</a></li>
<li><a href="https://github.com/bunkerity/bunkerized-mariadb">https://github.com/bunkerity/bunkerized-mariadb</a></li>
<li><a href="https://github.com/itzg/docker-minecraft-server">https://github.com/itzg/docker-minecraft-server</a></li>
<li><a href="https://github.com/bunkerity/bunkerized-nginx">https://github.com/bunkerity/bunkerized-nginx</a></li>
<li><a href="https://github.com/mailcow/mailcow-dockerized">https://github.com/mailcow/mailcow-dockerized</a></li>
<li><a href="https://github.com/bunkerity/bunkerized-php">https://github.com/bunkerity/bunkerized-php</a></li>
<li><a href="https://github.com/caddyserver/caddy-docker">https://github.com/caddyserver/caddy-docker</a></li>
<li><a href="https://github.com/kylemanna/docker-openvpn">https://github.com/kylemanna/docker-openvpn</a></li>
<li><a href="https://github.com/max-mapper/gifify-docker">https://github.com/max-mapper/gifify-docker</a></li>
<li><a href="https://github.com/linuxserver/docker-swag">https://github.com/linuxserver/docker-swag</a></li>
<li><a href="https://github.com/Monogramm/docker-frappe">https://github.com/Monogramm/docker-frappe</a></li>
<li><a href="https://github.com/SteveLTN/https-portal">https://github.com/SteveLTN/https-portal</a></li>
<li><a href="https://github.com/docker-library/ghost">https://github.com/docker-library/ghost</a></li>
<li><a href="https://github.com/gotenberg/gotenberg">https://github.com/gotenberg/gotenberg</a></li>
<li><a href="https://github.com/nodejs/docker-node">https://github.com/nodejs/docker-node</a></li>
<li><a href="https://github.com/genuinetools/img">https://github.com/genuinetools/img</a></li>
<li><a href="https://github.com/testcontainers">https://github.com/testcontainers</a></li>
<li><a href="https://github.com/docker-library">https://github.com/docker-library</a></li>
<li><a href="https://github.com/dockur/windows">https://github.com/dockur/windows</a></li>
<li><a href="https://github.com/dockur/macos">https://github.com/dockur/macos</a></li>
<li><a href="https://github.com/m1k1o/neko">https://github.com/m1k1o/neko</a></li>
</ul>