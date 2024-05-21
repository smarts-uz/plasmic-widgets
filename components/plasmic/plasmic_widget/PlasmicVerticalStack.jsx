// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7bKSoynR3noLe1Sg3WTwkN
// Component: _VSedUXWZbXE
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateOnMutateForSpec,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  initializeCodeComponentStates,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdTextArea } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { RichTable } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7bKSoynR3noLe1Sg3WTwkN/projectcss
import sty from "./PlasmicVerticalStack.module.css"; // plasmic-import: _VSedUXWZbXE/css

createPlasmicElementProxy;

export const PlasmicVerticalStack__VariantProps = new Array();

export const PlasmicVerticalStack__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicVerticalStack__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,
        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      },
      {
        path: "table.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "table.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "table.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "table.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("selectedRowKeys", RichTable_Helpers)
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sgc4K
              )}
            >
              {"Enter some text"}
            </div>
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
            />

            {(() => {
              const child$Props = {
                className: classNames("__wab_instance", sty.form),
                extendedOnValuesChange:
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "value",
                    ["form", "value"],
                    FormWrapper_Helpers
                  ),
                formItems: undefined,
                labelCol: { span: 8, horizontalOnly: true },
                layout: "vertical",
                mode: undefined,
                onIsSubmittingChange:
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "isSubmitting",
                    ["form", "isSubmitting"],
                    FormWrapper_Helpers
                  ),
                ref: ref => {
                  $refs["form"] = ref;
                },
                wrapperCol: { span: 16, horizontalOnly: true }
              };
              initializeCodeComponentStates(
                $state,
                [
                  {
                    name: "value",
                    plasmicStateName: "form.value"
                  },
                  {
                    name: "isSubmitting",
                    plasmicStateName: "form.isSubmitting"
                  }
                ],

                [],
                FormWrapper_Helpers ?? {},
                child$Props
              );
              return (
                <FormWrapper
                  data-plasmic-name={"form"}
                  data-plasmic-override={overrides.form}
                  {...child$Props}
                >
                  <FormItemWrapper
                    className={classNames(
                      "__wab_instance",
                      sty.formField__zYjc
                    )}
                    label={"Name"}
                    name={"name"}
                  >
                    <AntdInput
                      className={classNames("__wab_instance", sty.input)}
                    />
                  </FormItemWrapper>
                  <FormItemWrapper
                    className={classNames(
                      "__wab_instance",
                      sty.formField___6EKrJ
                    )}
                    label={"Message"}
                    name={"message"}
                  >
                    <AntdTextArea
                      className={classNames("__wab_instance", sty.textArea)}
                    />
                  </FormItemWrapper>
                  <AntdButton
                    className={classNames("__wab_instance", sty.button)}
                    submitsForm={true}
                    type={"primary"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sw4J9
                      )}
                    >
                      {"Submit"}
                    </div>
                  </AntdButton>
                </FormWrapper>
              );
            })()}
            {(() => {
              const child$Props = {
                className: classNames("__wab_instance", sty.table),
                onRowSelectionChanged: async (...eventArgs) => {
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "selectedRowKey",
                    ["table", "selectedRowKey"],
                    RichTable_Helpers
                  ).apply(null, eventArgs);
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "selectedRow",
                    ["table", "selectedRow"],
                    RichTable_Helpers
                  ).apply(null, eventArgs);
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "selectedRows",
                    ["table", "selectedRows"],
                    RichTable_Helpers
                  ).apply(null, eventArgs);
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "selectedRowKeys",
                    ["table", "selectedRowKeys"],
                    RichTable_Helpers
                  ).apply(null, eventArgs);
                },
                scopeClassName: sty["table__instance"],
                selectedRowKey: generateStateValueProp($state, [
                  "table",
                  "selectedRowKey"
                ]),
                selectedRowKeys: generateStateValueProp($state, [
                  "table",
                  "selectedRowKeys"
                ]),
                themeResetClassName: classNames(
                  projectcss.root_reset,
                  projectcss.root_reset_tags,
                  projectcss.plasmic_default_styles,
                  projectcss.plasmic_mixins,
                  projectcss.plasmic_tokens,
                  plasmic_antd_5_hostless_css.plasmic_tokens,
                  plasmic_plasmic_rich_components_css.plasmic_tokens
                )
              };
              initializeCodeComponentStates(
                $state,
                [
                  {
                    name: "selectedRowKey",
                    plasmicStateName: "table.selectedRowKey"
                  },
                  {
                    name: "selectedRow",
                    plasmicStateName: "table.selectedRow"
                  },
                  {
                    name: "selectedRows",
                    plasmicStateName: "table.selectedRows"
                  },
                  {
                    name: "selectedRowKeys",
                    plasmicStateName: "table.selectedRowKeys"
                  }
                ],

                [],
                RichTable_Helpers ?? {},
                child$Props
              );
              return (
                <RichTable
                  data-plasmic-name={"table"}
                  data-plasmic-override={overrides.table}
                  {...child$Props}
                />
              );
            })()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "img",
    "form",
    "input",
    "textArea",
    "button",
    "table"
  ],

  freeBox: ["freeBox", "img", "form", "input", "textArea", "button", "table"],
  img: ["img"],
  form: ["form", "input", "textArea", "button"],
  input: ["input"],
  textArea: ["textArea"],
  button: ["button"],
  table: ["table"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicVerticalStack__ArgProps,
          internalVariantPropNames: PlasmicVerticalStack__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicVerticalStack__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVerticalStack";
  } else {
    func.displayName = `PlasmicVerticalStack.${nodeName}`;
  }
  return func;
}

export const PlasmicVerticalStack = Object.assign(
  // Top-level PlasmicVerticalStack renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    form: makeNodeComponent("form"),
    input: makeNodeComponent("input"),
    textArea: makeNodeComponent("textArea"),
    button: makeNodeComponent("button"),
    table: makeNodeComponent("table"),
    // Metadata about props expected for PlasmicVerticalStack
    internalVariantProps: PlasmicVerticalStack__VariantProps,
    internalArgProps: PlasmicVerticalStack__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicVerticalStack;
/* prettier-ignore-end */
