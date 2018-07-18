class ImageColor {
  public imageUrl: string
  public colorList: any[] = ['0,0,0,0','255,255,255,255','128,128,128,255']

  public constructor(imageUrl: string) {
    this.imageUrl = imageUrl;
  }

	getMainColor() {
		this.initCanvas()
	}

	initCanvas() {
		let canvas = document.createElement('canvas')
		let ctx = canvas.getContext('2d')
		
		this.initImage()
			.then(res => {
				// console.log(res)
				let image = res as HTMLImageElement
				ctx.drawImage(image, 0, 0, 400, 400)
				let imageDatas = ctx.getImageData(0, 0, 400, 400)
				let imgdata = imageDatas.data //获取rgba数据
				let i = 0, len = imgdata.length
				let arr = []
				//将图片rgba数据push到新数组中
				for(i ; i<len ; i+=40 ) {
				  arr.push(imgdata[i]+','+imgdata[i+1]+','+imgdata[i+2]+','+imgdata[i+3])
				}
				// console.log(arr)
				this.progressData(arr)
			})
	}

	initImage() {
		return new Promise((resolve, reject) => {
			let img = new Image()
			img.src = this.imageUrl
			img.onload = function() {
				resolve(this)
			}

			img.onerror = function() {
				reject(this)
			}
		})
	}

	progressData(dataArr) {
		for(let i in dataArr){
			this.similarity(dataArr)
		}
	}

	similarity(rgb1) {
		rgb1 = rgb1.split(',')
		let r1 = rgb1[0], g1 = rgb1[1], b1 = rgb1[2]

		let lastPercent = 0
		let lastColor = ''
		for(let i in this.colorList){
			let rgb2 = this.colorList[i]
			let r2 = rgb2[0], g2 = rgb2[1], b2 = rgb2[2]
			let percent = ((255 - Math.abs(r1 - r2) * 0.297 - Math.abs(g1 - g2) * 0.593 - Math.abs(b1 - b2) * 0.11) / 255)
			if(percent > lastPercent){
				lastPercent = percent
			}
		}

		return 
		
	}
}

export default ImageColor