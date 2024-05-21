// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7bKSoynR3noLe1Sg3WTwkN
// Component: h0M9a4DtLKv-
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import { RichList } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-list";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7bKSoynR3noLe1Sg3WTwkN/projectcss
import sty from "./PlasmicDataGrid.module.css"; // plasmic-import: h0M9a4DtLKv-/css

createPlasmicElementProxy;

export const PlasmicDataGrid__VariantProps = new Array();

export const PlasmicDataGrid__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDataGrid__RenderFunc(props) {
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
  let [$queries, setDollarQueries] = React.useState({});
  const new$Queries = {
    componentData: usePlasmicDataOp(() => {
      return {
        sourceId: "8rKkMkxSryxAdgxU85iBaF",
        opId: "b71e4d93-1d8b-4428-a8b9-10bd6b416f0e",
        userArgs: {},
        cacheKey: `plasmic.$.b71e4d93-1d8b-4428-a8b9-10bd6b416f0e.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
    $queries = new$Queries;
  }
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
          <RichList
            bordered={true}
            className={classNames("__wab_instance", sty.dataList__qBrP8)}
            content={[{}]}
            data={(() => {
              try {
                return $queries.componentData;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
            linkTo={currentItem => {
              return currentItem.flag_url;
            }}
            title={(() => {
              const __composite = [
                { key: "name", fieldId: "name", role: "title", isHidden: null },
                {}
              ];

              __composite["0"]["isHidden"] = false;
              return __composite;
            })()}
            type={"grid"}
          />

          <RichList
            bordered={true}
            className={classNames("__wab_instance", sty.dataList__d3Lkz)}
            type={"grid"}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDataGrid__ArgProps,
          internalVariantPropNames: PlasmicDataGrid__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDataGrid__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDataGrid";
  } else {
    func.displayName = `PlasmicDataGrid.${nodeName}`;
  }
  return func;
}

export const PlasmicDataGrid = Object.assign(
  // Top-level PlasmicDataGrid renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicDataGrid
    internalVariantProps: PlasmicDataGrid__VariantProps,
    internalArgProps: PlasmicDataGrid__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDataGrid;
/* prettier-ignore-end */
