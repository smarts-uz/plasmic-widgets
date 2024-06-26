// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7bKSoynR3noLe1Sg3WTwkN
// Component: zAML8DkkdE4d
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv
} from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import { DataProvider } from "@plasmicpkgs/plasmic-basic-components";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7bKSoynR3noLe1Sg3WTwkN/projectcss
import sty from "./PlasmicDataProvider.module.css"; // plasmic-import: zAML8DkkdE4d/css

createPlasmicElementProxy;

export const PlasmicDataProvider__VariantProps = new Array();

export const PlasmicDataProvider__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDataProvider__RenderFunc(props) {
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
          <DataProvider
            data-plasmic-name={"dataProvider"}
            data-plasmic-override={overrides.dataProvider}
            className={classNames("__wab_instance", sty.dataProvider)}
            data={(() => {
              try {
                return $queries.query.data;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return [
                    {
                      name: "Fill Murray",
                      birthYear: 1950,
                      profilePicture: ["https://www.fillmurray.com/200/300"]
                    },
                    {
                      name: "Place Cage",
                      birthYear: 1950,
                      profilePicture: ["https://www.placecage.com/200/300"]
                    }
                  ];
                }
                throw e;
              }
            })()}
            name={"celebrities"}
          >
            <DataCtxReader__>
              {$ctx =>
                (_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                  (() => {
                    try {
                      return $ctx.celebrities;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })()
                ).map((__plasmic_item_0, __plasmic_idx_0) => {
                  const currentItem = __plasmic_item_0;
                  const currentIndex = __plasmic_idx_0;
                  return (
                    <div
                      data-plasmic-name={"freeBox"}
                      data-plasmic-override={overrides.freeBox}
                      className={classNames(projectcss.all, sty.freeBox)}
                      key={currentIndex}
                    >
                      <div
                        data-plasmic-name={"text"}
                        data-plasmic-override={overrides.text}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return currentItem.name;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
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
                        src={(() => {
                          try {
                            return currentItem.flag_url;
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
                      />
                    </div>
                  );
                })
              }
            </DataCtxReader__>
          </DataProvider>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "dataProvider", "freeBox", "text", "img"],
  dataProvider: ["dataProvider", "freeBox", "text", "img"],
  freeBox: ["freeBox", "text", "img"],
  text: ["text"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDataProvider__ArgProps,
          internalVariantPropNames: PlasmicDataProvider__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDataProvider__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDataProvider";
  } else {
    func.displayName = `PlasmicDataProvider.${nodeName}`;
  }
  return func;
}

export const PlasmicDataProvider = Object.assign(
  // Top-level PlasmicDataProvider renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    dataProvider: makeNodeComponent("dataProvider"),
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicDataProvider
    internalVariantProps: PlasmicDataProvider__VariantProps,
    internalArgProps: PlasmicDataProvider__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDataProvider;
/* prettier-ignore-end */
