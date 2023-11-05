export type Response<T> ={
    code: string
    msg: string
    result: T
}

export type Category ={
    id: string
    name: string
    picture: string
    saleInfo?: string
    layer?: number
    children: Category[]
    goods?: Good[]
}

export type Good ={
    id: string
    name: string
    desc: string
    price: string
    picture: string
    discount?: string
    orderNum: number
}

export type Banner ={
    /**
     * 轮播图跳转链接
     */
    hrefUrl: string;
    /**
     * 轮播图id
     */
    id: string;
    /**
     * 轮播图地址
     */
    imgUrl: string;
    /**
     * 轮播图跳转类型，跳转类型: 1、页面2、H5 3、小程序（小程序使用）
     */
    type: string;
}

export type Hot ={
    /**
     * 推荐别名
     */
    alt: string;
    /**
     * 推荐id
     */
    id: string;
    /**
     * 推荐图片
     */
    picture: string;
    /**
     * 推荐标题
     */
    title: string;
}
