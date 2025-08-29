import { EnvConfig } from "@/config/EnvConfig";

export const DefinitionBlockStatus = {
    SELECTED: 'SELECTED',
    EXCLUDED: 'EXCLUDED',
    OPTIONAL: 'OPTIONAL',
    NOT_OPTIONAL: 'NOT_OPTIONAL',
};


export function BACKLINK_BLOCK_SORT_METHOD_ELEMENT(): { name: string, value: BlockSortMethod }[] {
    return [
        {
            name: EnvConfig.ins.i18n.modifiedASC,
            value: "modifiedAsc",
        },
        {
            name: EnvConfig.ins.i18n.modifiedDESC,
            value: "modifiedDesc",
        },
        {
            name: EnvConfig.ins.i18n.createdASC,
            value: "createdAsc",
        },
        {
            name: EnvConfig.ins.i18n.createdDESC,
            value: "createdDesc",
        },
        {
            name: EnvConfig.ins.i18n.fileNameASC,
            value: "alphabeticAsc",
        },
        {
            name: EnvConfig.ins.i18n.fileNameDESC,
            value: "alphabeticDesc",
        },
        {
            name: EnvConfig.ins.i18n.docNameASC,
            value: "documentAlphabeticAsc",
        },
        {
            name: EnvConfig.ins.i18n.docNameDESC,
            value: "documentAlphabeticDesc",
        },
    ];
}



export function CUR_DOC_DEF_BLOCK_SORT_METHOD_ELEMENT(): { name: string, value: BlockSortMethod }[] {

    return [
        {
            name: EnvConfig.ins.i18n.type,
            value: "typeAndContent",
        },
        {
            name: EnvConfig.ins.i18n.refCountASC,
            value: "refCountAsc",
        },
        {
            name: EnvConfig.ins.i18n.refCountDESC,
            value: "refCountDesc",
        },
    ];
}

export function CUR_DOC_DEF_BLOCK_TYPE_ELEMENT(): { name: string, value: string }[] {

    return [
        {
            name: EnvConfig.ins.i18n.curDocDefBlock,
            value: "curDocDefBlock",
        },
        {
            name: EnvConfig.ins.i18n.curDocRefDefBlock,
            value: "curDocRefDefBlock",
        },
        {
            name: EnvConfig.ins.i18n.allDefBlocks,
            value: "all",
        },
    ];
}



export function RELATED_DEF_BLOCK_TYPE_ELEMENT(): { name: string, value: string }[] {

    return [
        {
            name: EnvConfig.ins.i18n.relatedDefBlockType_all,
            value: "all",
        },
        {
            name: EnvConfig.ins.i18n.relatedDefBlockType_dynamicAnchorText,
            value: "dynamicAnchorText",
        },
        {
            name: EnvConfig.ins.i18n.relatedDefBlockType_staticAnchorText,
            value: "staticAnchorText",
        },
    ];
}


export function RELATED_DEF_BLOCK_SORT_METHOD_ELEMENT(): { name: string, value: BlockSortMethod }[] {

    return [
        {
            name: EnvConfig.ins.i18n.refCountASC,
            value: "refCountAsc",
        },
        {
            name: EnvConfig.ins.i18n.refCountDESC,
            value: "refCountDesc",
        }, {
            name: EnvConfig.ins.i18n.modifiedASC,
            value: "modifiedAsc",
        },
        {
            name: EnvConfig.ins.i18n.modifiedDESC,
            value: "modifiedDesc",
        },
        {
            name: EnvConfig.ins.i18n.createdASC,
            value: "createdAsc",
        },
        {
            name: EnvConfig.ins.i18n.createdDESC,
            value: "createdDesc",
        },
        {
            name: EnvConfig.ins.i18n.fileNameASC,
            value: "alphabeticAsc",
        },
        {
            name: EnvConfig.ins.i18n.fileNameDESC,
            value: "alphabeticDesc",
        },
    ];
}



export function RELATED_DOCMUMENT_SORT_METHOD_ELEMENT(): { name: string, value: BlockSortMethod }[] {

    return [
        {
            name: EnvConfig.ins.i18n.refCountASC,
            value: "refCountAsc",
        },
        {
            name: EnvConfig.ins.i18n.refCountDESC,
            value: "refCountDesc",
        }, {
            name: EnvConfig.ins.i18n.modifiedASC,
            value: "modifiedAsc",
        },
        {
            name: EnvConfig.ins.i18n.modifiedDESC,
            value: "modifiedDesc",
        },
        {
            name: EnvConfig.ins.i18n.createdASC,
            value: "createdAsc",
        },
        {
            name: EnvConfig.ins.i18n.createdDESC,
            value: "createdDesc",
        },
        {
            name: EnvConfig.ins.i18n.fileNameASC,
            value: "alphabeticAsc",
        },
        {
            name: EnvConfig.ins.i18n.fileNameDESC,
            value: "alphabeticDesc",
        },
    ];
}
