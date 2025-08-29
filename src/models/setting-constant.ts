import { BACKLINK_BLOCK_SORT_METHOD_ELEMENT, CUR_DOC_DEF_BLOCK_SORT_METHOD_ELEMENT, RELATED_DEF_BLOCK_SORT_METHOD_ELEMENT, RELATED_DOCMUMENT_SORT_METHOD_ELEMENT } from "./backlink-constant";
import { ItemProperty, IOption, TabProperty } from "./setting-model";
import { EnvConfig } from "@/config/EnvConfig";

export function getSettingTabArray(): TabProperty[] {

    let tabProperties: TabProperty[] = [

    ];

    tabProperties.push(
        new TabProperty({
            key: "plugin-setting", name: EnvConfig.ins.i18n.settingTabPlugin, iconKey: "iconPlugin", props: [
                new ItemProperty({ key: "dockDisplay", type: "switch", name: EnvConfig.ins.i18n.s_dockDisplay, description: "", tips: "" }),
                new ItemProperty({ key: "documentBottomDisplay", type: "switch", name: EnvConfig.ins.i18n.s_documentBottomDisplay, description: "", tips: "" }),
                new ItemProperty({ key: "flashCardBottomDisplay", type: "switch", name: EnvConfig.ins.i18n.s_flashCardBottomDisplay, description: "", tips: "" }),
                new ItemProperty({ key: "cacheAfterResponseMs", type: "number", name: EnvConfig.ins.i18n.s_cacheAfterResponseMs, description: EnvConfig.ins.i18n.s_cacheAfterResponseMs_desc, tips: "", min: -1 }),
                new ItemProperty({ key: "cacheExpirationTime", type: "number", name: EnvConfig.ins.i18n.s_cacheExpirationTime, description: "", tips: EnvConfig.ins.i18n.s_cacheExpirationTime_tips, min: -1, }),
                new ItemProperty({ key: "doubleClickTimeout", type: "number", name: EnvConfig.ins.i18n.s_doubleClickTimeout, description: "", tips: "", min: 0, }),
                new ItemProperty({ key: "documentBottomBacklinkPaddingWidth", type: "number", name: EnvConfig.ins.i18n.s_documentBottomBacklinkPaddingWidth, description: EnvConfig.ins.i18n.s_documentBottomBacklinkPaddingWidth_desc, tips: "" }),
            ]
        }),
        new TabProperty({
            key: "filter-panel-setting", name: EnvConfig.ins.i18n.settingTabFilterPanel, iconKey: "iconFilter", props: [
                new ItemProperty({ key: "filterPanelViewExpand", type: "switch", name: EnvConfig.ins.i18n.s_filterPanelViewExpand, description: "", tips: "" }),
                new ItemProperty({ key: "defaultSelectedViewBlock", type: "switch", name: EnvConfig.ins.i18n.s_defaultSelectedViewBlock, description: "", tips: "" }),

                new ItemProperty({ key: "queryParentDefBlock", type: "switch", name: EnvConfig.ins.i18n.s_queryParentDefBlock, description: "", tips: "" }),
                new ItemProperty({ key: "querrChildDefBlockForListItem", type: "switch", name: EnvConfig.ins.i18n.s_querrChildDefBlockForListItem, description: EnvConfig.ins.i18n.s_querrChildDefBlockForListItem_desc, tips: "" }),
                new ItemProperty({ key: "queryChildDefBlockForHeadline", type: "switch", name: EnvConfig.ins.i18n.s_queryChildDefBlockForHeadline, description: EnvConfig.ins.i18n.s_queryChildDefBlockForHeadline_desc, tips: "" }),

                new ItemProperty({ key: "filterPanelCurDocDefBlockSortMethod", type: "select", name: EnvConfig.ins.i18n.s_filterPanelCurDocDefBlockSortMethod, description: "", tips: "", options: geturDocDefBlockSortMethodElement() }),
                new ItemProperty({ key: "filterPanelRelatedDefBlockSortMethod", type: "select", name: EnvConfig.ins.i18n.s_filterPanelRelatedDefBlockSortMethod, description: "", tips: "", options: getRelatedDefBlockSortMethodElement() }),
                new ItemProperty({ key: "filterPanelBacklinkDocumentSortMethod", type: "select", name: EnvConfig.ins.i18n.s_filterPanelBacklinkDocumentSortMethod, description: "", tips: "", options: getRelatedDocmumentSortMethodElement() }),

            ]

        }),
        new TabProperty({
            key: "backlink-panel-setting", name: EnvConfig.ins.i18n.settingTabBacklinkPanel, iconKey: "iconLink", props: [
                new ItemProperty({ key: "docBottomBacklinkPanelViewExpand", type: "switch", name: EnvConfig.ins.i18n.s_docBottomBacklinkPanelViewExpand, description: "", tips: "" }),
                new ItemProperty({ key: "pageSize", type: "number", name: EnvConfig.ins.i18n.s_pageSize, description: EnvConfig.ins.i18n.s_pageSize_desc, tips: "", min: 1, max: 50 }),
                new ItemProperty({ key: "backlinkBlockSortMethod", type: "select", name: EnvConfig.ins.i18n.s_backlinkBlockSortMethod, description: "", tips: "", options: getBacklinkBlockSortMethodOptions() }),
                new ItemProperty({ key: "defaultExpandedListItemLevel", type: "number", name: EnvConfig.ins.i18n.s_defaultExpandedListItemLevel, description: EnvConfig.ins.i18n.s_defaultExpandedListItemLevel_desc, tips: "", min: 0, max: 10 }),
                new ItemProperty({ key: "hideBacklinkProtyleBreadcrumb", type: "switch", name: EnvConfig.ins.i18n.s_hideBacklinkProtyleBreadcrumb, description: "", tips: "" }),

            ]

        }),

    );

    return tabProperties;
}

function getBacklinkBlockSortMethodOptions(): IOption[] {
    let backlinkBlockSortMethodElements = BACKLINK_BLOCK_SORT_METHOD_ELEMENT();
    let options: IOption[] = [];
    for (const element of backlinkBlockSortMethodElements) {
        options.push(element);
    }

    return options;
}


function geturDocDefBlockSortMethodElement(): IOption[] {
    let backlinkBlockSortMethodElements = CUR_DOC_DEF_BLOCK_SORT_METHOD_ELEMENT();
    let options: IOption[] = [];
    for (const element of backlinkBlockSortMethodElements) {
        options.push(element);
    }

    return options;
}

function getRelatedDefBlockSortMethodElement(): IOption[] {
    let backlinkBlockSortMethodElements = RELATED_DEF_BLOCK_SORT_METHOD_ELEMENT();
    let options: IOption[] = [];
    for (const element of backlinkBlockSortMethodElements) {
        options.push(element);
    }

    return options;
}

function getRelatedDocmumentSortMethodElement(): IOption[] {
    let backlinkBlockSortMethodElements = RELATED_DOCMUMENT_SORT_METHOD_ELEMENT();
    let options: IOption[] = [];
    for (const element of backlinkBlockSortMethodElements) {
        options.push(element);
    }

    return options;
}