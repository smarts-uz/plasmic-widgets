// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7bKSoynR3noLe1Sg3WTwkN
// Component: HAg3nacP5vAc
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
import sty from "./PlasmicDataList.module.css"; // plasmic-import: HAg3nacP5vAc/css

createPlasmicElementProxy;

export const PlasmicDataList__VariantProps = new Array();

export const PlasmicDataList__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDataList__RenderFunc(props) {
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
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "8rKkMkxSryxAdgxU85iBaF",
        opId: "c4be717f-3181-434e-a73a-d81fdb71d6e3",
        userArgs: {},
        cacheKey: `plasmic.$.c4be717f-3181-434e-a73a-d81fdb71d6e3.$.`,
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
            data-plasmic-name={"dataList"}
            data-plasmic-override={overrides.dataList}
            bordered={true}
            className={classNames("__wab_instance", sty.dataList)}
            content={(() => {
              const __composite = [
                { key: "position", fieldId: null, role: "content" },
                {}
              ];

              __composite["0"]["fieldId"] = "position";
              return __composite;
            })()}
            data={(() => {
              try {
                return $queries.query;
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
            rowActions={[{ type: "item" }]}
            subtitle={(() => {
              const __composite = [
                { role: "subtitle", fieldId: null, expr: null, dataType: null },
                { role: "subtitle", fieldId: null, expr: null }
              ];

              __composite["0"]["fieldId"] = "shirt_number";
              __composite["0"]["expr"] = (currentItem, currentValue) => {
                return currentItem.shirt_number;
              };
              __composite["0"]["dataType"] = "auto";
              __composite["1"]["fieldId"] = "FSYP";
              __composite["1"]["expr"] = (currentItem, currentValue) => {
                return currentItem.FSYP;
              };
              return __composite;
            })()}
            title={(() => {
              const __composite = [
                { key: "name", fieldId: "name", role: "title" },
                { role: "title", fieldId: null, expr: null }
              ];

              __composite["1"]["fieldId"] = "club_id";
              __composite["1"]["expr"] = (currentItem, currentValue) => {
                return currentValue;
              };
              return __composite;
            })()}
            type={"grid"}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "dataList"],
  dataList: ["dataList"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDataList__ArgProps,
          internalVariantPropNames: PlasmicDataList__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDataList__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDataList";
  } else {
    func.displayName = `PlasmicDataList.${nodeName}`;
  }
  return func;
}

export const PlasmicDataList = Object.assign(
  // Top-level PlasmicDataList renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    dataList: makeNodeComponent("dataList"),
    // Metadata about props expected for PlasmicDataList
    internalVariantProps: PlasmicDataList__VariantProps,
    internalArgProps: PlasmicDataList__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDataList;
/* prettier-ignore-end */
