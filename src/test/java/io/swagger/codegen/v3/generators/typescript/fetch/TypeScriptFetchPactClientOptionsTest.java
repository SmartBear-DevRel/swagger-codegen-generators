package io.swagger.codegen.v3.generators.typescript.fetch;

import io.swagger.codegen.v3.CodegenConfig;
import io.swagger.codegen.v3.generators.AbstractOptionsTest;
import io.swagger.codegen.v3.generators.options.TypeScriptFetchPactClientOptionsProvider;
import io.swagger.codegen.v3.generators.typescript.TypeScriptFetchPactClientCodegen;
import mockit.Expectations;
import mockit.Tested;

public class TypeScriptFetchPactClientOptionsTest extends AbstractOptionsTest {

    @Tested
    private TypeScriptFetchPactClientCodegen clientCodegen;

    public TypeScriptFetchPactClientOptionsTest() {
        super(new TypeScriptFetchPactClientOptionsProvider());
    }

    @Override
    protected CodegenConfig getCodegenConfig() {
        return clientCodegen;
    }

    @SuppressWarnings("unused")
    @Override
    protected void setExpectations() {
        new Expectations(clientCodegen) {
            {
                clientCodegen.setSortParamsByRequiredFlag(
                        Boolean.valueOf(TypeScriptFetchPactClientOptionsProvider.SORT_PARAMS_VALUE));
                times = 1;
                clientCodegen.setModelPropertyNaming(TypeScriptFetchPactClientOptionsProvider.MODEL_PROPERTY_NAMING_VALUE);
                times = 1;
                clientCodegen.setSupportsES6(Boolean.valueOf(TypeScriptFetchPactClientOptionsProvider.SUPPORTS_ES6_VALUE));
                times = 1;
            }
        };
    }
}
