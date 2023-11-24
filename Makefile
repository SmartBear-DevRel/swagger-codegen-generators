
# 1. Download Swagger Codegen CLI:
#     * swagger-codegen-cli-3.0.34.jar – use it to create OpenAPI 3.0 code generators
#     * swagger-codegen-cli-2.4.27.jar – use it to create OpenAPI 2.0 code generators
# 2. Git clone https://github.com/swagger-api/swagger-codegen-generators
# 3. Cd swagger-codegen-generators
# 4. mvn package
# 5. mvn package && 


package:
	mvn package

generate-typescript-fetch-pact:
	java -cp swagger-codegen-cli-3.0.34.jar:target/swagger-codegen-generators-1.0.46-SNAPSHOT.jar io.swagger.codegen.v3.Codegen  \
     -i pact-oas.yaml -l typescript-fetch-pact -c config.json

install-typescript-fetch-pact:
	cd generated-code/typescript-fetch-pact && npm i

test-typescript-fetch-pact:
	cd generated-code/typescript-fetch-pact && npm t

build_noinstall: package generate-typescript-fetch-pact
build: package generate-typescript-fetch-pact install-typescript-fetch-pact
test: test-typescript-fetch-pact