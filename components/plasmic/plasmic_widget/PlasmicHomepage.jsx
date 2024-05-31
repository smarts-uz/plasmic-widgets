// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7bKSoynR3noLe1Sg3WTwkN
// Component: aGmDMGLCnLtX
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
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
import { AntdPagination } from "@plasmicpkgs/antd5/skinny/registerPagination";
import { paginationHelpers as AntdPagination_Helpers } from "@plasmicpkgs/antd5/skinny/registerPagination";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7bKSoynR3noLe1Sg3WTwkN/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: aGmDMGLCnLtX/css

createPlasmicElementProxy;

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props) {
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
        path: "pagination.currentPage",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 1,
        onMutate: generateOnMutateForSpec("currentPage", AntdPagination_Helpers)
      },
      {
        path: "pagination.pageSize",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 10,
        onMutate: generateOnMutateForSpec("pageSize", AntdPagination_Helpers)
      },
      {
        path: "pagination.startIndex",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("startIndex", AntdPagination_Helpers)
      },
      {
        path: "pagination.endIndex",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("endIndex", AntdPagination_Helpers)
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
          {(() => {
            const child$Props = {
              className: classNames("__wab_instance", sty.pagination),
              current: generateStateValueProp($state, [
                "pagination",
                "currentPage"
              ]),
              defaultCurrent: 1,
              defaultPageSize: 10,
              onChange: async (...eventArgs) => {
                generateStateOnChangePropForCodeComponents(
                  $state,
                  "currentPage",
                  ["pagination", "currentPage"],
                  AntdPagination_Helpers
                ).apply(null, eventArgs);
                generateStateOnChangePropForCodeComponents(
                  $state,
                  "startIndex",
                  ["pagination", "startIndex"],
                  AntdPagination_Helpers
                ).apply(null, eventArgs);
                generateStateOnChangePropForCodeComponents(
                  $state,
                  "endIndex",
                  ["pagination", "endIndex"],
                  AntdPagination_Helpers
                ).apply(null, eventArgs);
              },
              onShowSizeChange: generateStateOnChangePropForCodeComponents(
                $state,
                "pageSize",
                ["pagination", "pageSize"],
                AntdPagination_Helpers
              ),
              pageSize: generateStateValueProp($state, [
                "pagination",
                "pageSize"
              ]),
              pageSizeOptions: [
                { pageSize: 10 },
                { pageSize: 20 },
                { pageSize: 50 },
                { pageSize: 100 }
              ]
            };
            initializeCodeComponentStates(
              $state,
              [
                {
                  name: "currentPage",
                  plasmicStateName: "pagination.currentPage"
                },
                {
                  name: "pageSize",
                  plasmicStateName: "pagination.pageSize"
                },
                {
                  name: "startIndex",
                  plasmicStateName: "pagination.startIndex"
                },
                {
                  name: "endIndex",
                  plasmicStateName: "pagination.endIndex"
                }
              ],

              [],
              AntdPagination_Helpers ?? {},
              child$Props
            );
            return (
              <AntdPagination
                data-plasmic-name={"pagination"}
                data-plasmic-override={overrides.pagination}
                {...child$Props}
              />
            );
          })()}
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "pagination"],
  pagination: ["pagination"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pagination: makeNodeComponent("pagination"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
