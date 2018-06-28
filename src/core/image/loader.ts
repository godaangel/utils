/**
 * 用于图片加载时对图片的加载中和错误进行处理
 * 未完成
 */

class ImageLoader {
	public errorImage: string | string[]
	public loadingImage: string | string[]
  public element: any
	// private 

	public constructor(element: any, errorImage?: string | string[], loadingImage?: string | string[]) {
    this.errorImage = errorImage
    this.loadingImage = loadingImage
    this.element = element
    this.init()
  }

  private init(): void {
  	let image: any = this.element

    let defaultColor: string = this.tobase64(document.defaultView.getComputedStyle(image[0]).width, document.defaultView.getComputedStyle(image[0]).height)

    var img =new Image();
    img.onload =function(){
      img.onload =null;
      image[0].src = img.src
    }

    img.src = image[0].src
    image[0].src = defaultColor

    console.log(image)
    if(!image.length){
      console.log(image, document.defaultView.getComputedStyle(image).width)
    }else{
      for (let i = 0; i < image.length; i ++){
        console.log(image[i], document.defaultView.getComputedStyle(image[i]).width)
      }
    }
  	
  }

  // 需要色块转base64，需要试试canvas是否靠谱
  // 转base64以后需要测试是否会触发onload事件直接略过图片
  
  private tobase64(width, height): string {
    let canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');
    width = width.replace('px', '');
    height = height.replace('px', '');
    console.log('width, height  ', width, height)
    canvas.height = width
    canvas.width = height
    ctx.fillStyle="#FF0000";
    ctx.fillRect(0,0,width,height);

    var dataURL = canvas.toDataURL('image/png')

    console.log(dataURL)
    return dataURL
  }

}

export default ImageLoader;