import { NativeEventEmitter } from "react-native";
import { COMMANDS } from './utils/printer-commands';
export interface PrinterOptions {
    beep?: boolean;
    cut?: boolean;
    tailingLine?: boolean;
    encoding?: string;
}
export declare enum PrinterWidth {
    '58mm' = 58,
    '80mm' = 80
}
export interface PrinterImageOptions {
    beep?: boolean;
    cut?: boolean;
    tailingLine?: boolean;
    encoding?: string;
    imageWidth?: number;
    imageHeight?: number;
    printerWidthType?: PrinterWidth;
    paddingX?: number;
}
export interface PrinterImageBase64Options {
    beep?: boolean;
    cut?: boolean;
    tailingLine?: boolean;
    encoding?: string;
    /** should be set = 576 for 80mm paper; = 384 for 56mm paper;
    */
    imageWidth?: number;
    /** Set imageHeight = -1 to auto scale image height. */
    imageHeight?: number;
    /** Only iOS (required)
     * should be set = 576 for 80mm paper; = 384 for 56mm paper;
    */
    printerWidth?: number;
    paddingX?: number;
}
export interface IUSBPrinter {
    device_name: string;
    vendor_id: string;
    product_id: string;
}
export interface IBLEPrinter {
    device_name: string;
    inner_mac_address: string;
}
export interface INetPrinter {
    host: string;
    port: number;
}
export declare enum ColumnAliment {
    LEFT = 0,
    CENTER = 1,
    RIGHT = 2
}
declare const USBPrinter: {
    init: () => Promise<void>;
    getDeviceList: () => Promise<IUSBPrinter[]>;
    connectPrinter: (vendorId: string, productId: string) => Promise<IUSBPrinter>;
    closeConn: () => Promise<void>;
    printText: (text: string, opts?: PrinterOptions) => Promise<unknown>;
    printBill: (text: string, opts?: PrinterOptions) => Promise<unknown>;
    /**
     * image url
     * @param imgUrl
     * @param opts
     */
    printImage: (imgUrl: string, opts?: PrinterImageOptions) => Promise<unknown>;
    /**
     * base 64 string
     * @param Base64
     * @param opts
     */
    printImageBase64: (Base64: string, opts?: PrinterImageBase64Options) => Promise<unknown>;
    /**
     * android print with encoder
     * @param text
     */
    printRaw: (text: string) => void;
    /**
     * `columnWidth`
     * 80mm => 46 character
     * 58mm => 30 character
     */
    printColumnsText: (texts: string[], columnWidth: number[], columnAliment: (ColumnAliment)[], columnStyle: string[], opts?: PrinterOptions) => void;
    printTestPaper: () => void;
    selfTest: () => void;
};
declare const BLEPrinter: {
    init: () => Promise<void>;
    clear: () => void;
    getDeviceList: () => Promise<IBLEPrinter[]>;
    connectPrinter: (inner_mac_address: string) => Promise<IBLEPrinter>;
    closeConn: () => Promise<void>;
    printText: (text: string, opts?: PrinterOptions) => Promise<unknown>;
    printBill: (text: string, opts?: PrinterOptions) => Promise<unknown>;
    /**
     * image url
     * @param imgUrl
     * @param opts
     */
    printImage: (imgUrl: string, opts?: PrinterImageOptions) => Promise<unknown>;
    /**
     * base 64 string
     * @param Base64
     * @param opts
     */
    printImageBase64: (Base64: string, opts?: PrinterImageBase64Options) => Promise<unknown>;
    /**
     * android print with encoder
     * @param text
     */
    printRaw: (text: string) => void;
    /**
     * `columnWidth`
     * 80mm => 46 character
     * 58mm => 30 character
     */
    printColumnsText: (texts: string[], columnWidth: number[], columnAliment: (ColumnAliment)[], columnStyle: string[], opts?: PrinterOptions) => void;
    printTestPaper: () => void;
    selfTest: () => void;
};
declare const NetPrinter: {
    init: () => Promise<void>;
    clear: () => void;
    getDeviceList: (prefixPrinterIp: string) => Promise<INetPrinter[]>;
    stopGetDeviceList: () => void;
    connectPrinter: (host: string, port: number, timeout?: number) => Promise<INetPrinter>;
    closeConn: () => Promise<string>;
    printText: (text: string, opts?: PrinterOptions) => Promise<unknown>;
    printBill: (text: string, opts?: PrinterOptions) => Promise<unknown>;
    /**
     * image url
     * @param imgUrl
     * @param opts
     */
    printImage: (imgUrl: string, opts?: PrinterImageOptions) => Promise<unknown>;
    /**
     * base 64 string
     * @param Base64
     * @param opts
     */
    printImageBase64: (Base64: string, opts?: PrinterImageBase64Options) => Promise<unknown>;
    /**
     * Android print with encoder
     * @param text
     */
    printRaw: (text: string) => void;
    /**
     * `columnWidth`
     * 80mm => 46 character
     * 58mm => 30 character
     */
    printColumnsText: (texts: string[], columnWidth: number[], columnAliment: (ColumnAliment)[], columnStyle?: string[], opts?: PrinterOptions) => void;
    printTestPaper: () => void;
    selfTest: () => void;
};
declare const NetPrinterEventEmitter: NativeEventEmitter;
export { COMMANDS, NetPrinter, BLEPrinter, USBPrinter, NetPrinterEventEmitter };
export declare enum RN_THERMAL_RECEIPT_PRINTER_EVENTS {
    EVENT_NET_PRINTER_SCANNED_SUCCESS = "scannerResolved",
    EVENT_NET_PRINTER_SCANNING = "scannerRunning",
    EVENT_NET_PRINTER_SCANNED_ERROR = "registerError"
}
