# Main dockerfile
#
# Build project:
# npm run build
# 
# Build image:
# docker build -t ghcr.io/lotostudio/financial-web .
#
# Run container by passing env variables by flag -e:
# docker run -p 80:80 ghcr.io/lotostudio/financial-web:latest
#
# Transfer static content to nginx container
FROM nginx:stable-alpine

COPY dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
