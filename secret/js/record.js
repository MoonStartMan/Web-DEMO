let tempData = [
	//	image -> 图片
	//	title -> 标题
	//	content -> 内容部分
	//	contentList -> 单条内容信息
	{
		image: "../image/1.jpeg",
		title: "2021.06.13",
		content: [{
				contentList: "1. 第一次一起看电影《寂静之地2》"
			},
			{
				contentList: "2. 一起吃的 《九锅一堂》"
			},
			{
				contentList: "3. 第一次一起去电玩城玩(投篮机、推币机、变形金刚打怪兽)"
			}
		]
	},
	{
		image: "../image/2.jpeg",
		title: "2021.06.15",
		content: [{
				contentList: "第一次用项目金给梅梅买零食，分享快乐"
			},
		]
	},
	{
		image: "../image/3.jpeg",
		title: "2021.06.20",
		content: [
			{
				contentList: "1. 第二次看电影《困在时间里的父亲》，虽然没怎么看懂，还有点犯困哈哈。"
			},
			{
				contentList: "2. 一起吃的 《烤匠》"
			},
			{
				contentList: "3. 去了幸福村湿地公园玩"
			},
			{
				contentList: "4. 答应了梅梅拍照，但是没有问梅梅拍照，梅梅有点失落。下次一定注意。"
			}
		]
	},
	{
		image: "../image/4.jpeg",
		title: "2021.06.27",
		content: [{
				contentList: "1. 一起去玩了陶艺，捏了一个哆啦A梦"
			},
			{
				contentList: "2. 一起去逛了超市，没有啥买的"
			},
			{
				contentList: "3. 一起吃了烤肉，然后两个人肚子都有点不舒服 哈哈"
			},
			{
				contentList: "4. 陪梅梅一起在湖边走了走，很多人，也很快乐"
			},
			{
				contentList: "5. 第一次给梅梅送了鲜花，并有了合照"
			}
		]
	},
	{
		image: "../image/5.jpeg",
		title: "2021.07.02",
		content: [{
				contentList: "给梅梅做了学习计划"
			},
		]
	},
	{
		image: "../image/6.jpeg",
		title: "2021.07.04",
		content: [
			{
				contentList: "1. 一起看了电影《先驱者》"
			},
			{
				contentList: "2. 一起吃了海底捞"
			},
			{
				contentList: "3. 去了电玩城玩游戏 兑换了奖品"
			}
		]
	},
	{
		image: "../image/7.jpeg",
		title: "2021.07.10",
		content: [{
				contentList: "1. 一起吃寿司"
			},
			{
				contentList: "2. 一起看电影《中国医生》"
			},
			{
				contentList: "3. 一起喝星巴克"
			}
		]
	},
	{
		image: "../image/8.jpeg",
		title: "2021.07.15",
		content: [{
				contentList: "1. 第一个月的礼物给梅梅买了包包，我们两一人一支电动牙刷"
			},
			{
				contentList: "2. 和梅梅谈了结婚的事情、以及存钱的计划"
			},
		]
	},
	{
		image: "../image/9.jpeg",
		title: "2021.07.17",
		content: [{
				contentList: "1. 请了梅梅的室友丸子以及她男朋友一起吃饭"
			},
			{
				contentList: "2. 开车送梅梅回家"
			},
			{
				contentList: "3. 第一次公主抱梅梅，还背了梅梅"
			}
		]
	},
	{
		image: "../image/10.jpeg",
		title: "2021.07.18",
		content: [{
				contentList: "1. 监督梅梅下午学习"
			},
			{
				contentList: "2. 和梅梅一起吃了牛排"
			},
			{
				contentList: "3. 和梅梅一起看了电影"
			}
		]
	},
	{
		image: "../image/11.jpeg",
		title: "2021.07.25",
		content: [{
				contentList: "1. 和梅梅一起唱歌"
			},
			{
				contentList: "2. 和梅梅一起在大学城吃了干锅"
			},
			{
				contentList: "3. 在大雨中艰难吃干锅，然后让我朋友来我们回家。哈哈"
			}
		]
	},
	{
		image: "../image/12.jpeg",
		title: "2021.08.01",
		content: [{
				contentList: "1.  第一次和梅梅去了私人影院"
			},
			{
				contentList: "2. 第一次一起吃了《屋头串串》就是人好多啊"
			},
			{
				contentList: "3. 然后一起拍了合照，梅梅看起来好甜啊"
			}
		]
	},
	{
		image: "../image/13.jpeg",
		title: "2021.08.08",
		content: [{
				contentList: "1. 第一次和梅梅一起打PS游戏，梅梅玩游戏好厉害"
			},
			{
				contentList: "2. 晚上一起吃了干锅虾，给梅梅剥虾，味道还不错。"
			},
		]
	},
	{
		image: "../image/14.jpeg",
		title: "2021.08.14",
		content: [{
				contentList: "1. 第一个情节人"
			},
			{
				contentList: "2. 带梅梅去吃了牛肉, 就是有点热，我被熏腊肉的感觉，哈哈"
			},
			{
				contentList: "3. 一起看了电影《怒火重案》,谢霆锋好帅啊"
			},
			{
				contentList: "4. 反省了一下，不惹梅梅生气，不能骗梅梅，要给梅梅好好说，否则会更生气。"
			},
		]
	},
]

//	创建template模板
function createTemplate(temp) {
	for (let i = 0; i < temp.length; i++) {
		const templateItem = temp[i]
		$(".cards").append(
			`
			<li>
            <div class="image-box">
                <img src="${templateItem.image}" alt="">
				</div>
				<div class="title">${templateItem.title}</div>
				<div class="content-box">
					<div class="content-lists-box">
						
					</div>
				</div>
			</li>
			`
		)
		for (let j = 0; j < templateItem.content.length; j++) {
			const contentListItem = templateItem.content[j]
			$(".content-lists-box").eq(i).append(
				`
					<div class="content-list">${contentListItem.contentList}</div>
				`
			)
		}
	}
}

createTemplate(tempData)

gsap.registerPlugin(ScrollTrigger);

let iteration = 0; // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.

const spacing = 0.1, // spacing of the cards (stagger)
	snap = gsap.utils.snap(spacing), // we'll use this to snap the playhead on the seamlessLoop
	cards = gsap.utils.toArray('.cards li'),
	seamlessLoop = buildSeamlessLoop(cards, spacing),
	scrub = gsap.to(seamlessLoop, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
		totalTime: 0,
		duration: 0.5,
		ease: "power3",
		paused: true
	}),
	trigger = ScrollTrigger.create({
		start: 0,
		onUpdate(self) {
			if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
				wrapForward(self);
			} else if (self.progress < 1e-5 && self.direction < 0 && !self.wrapping) {
				wrapBackward(self);
			} else {
				scrub.vars.totalTime = snap((iteration + self.progress) * seamlessLoop.duration());
				scrub.invalidate().restart(); // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
				self.wrapping = false;
			}
		},
		end: "+=3000",
		pin: ".gallery"
	});

function wrapForward(trigger) { // when the ScrollTrigger reaches the end, loop back to the beginning seamlessly
	iteration++;
	trigger.wrapping = true;
	trigger.scroll(trigger.start + 1);
}

function wrapBackward(trigger) { // when the ScrollTrigger reaches the start again (in reverse), loop back to the end seamlessly
	iteration--;
	if (iteration < 0) { // to keep the playhead from stopping at the beginning, we jump ahead 10 iterations
		iteration = 9;
		seamlessLoop.totalTime(seamlessLoop.totalTime() + seamlessLoop.duration() * 10);
		scrub.pause(); // otherwise it may update the totalTime right before the trigger updates, making the starting value different than what we just set above. 
	}
	trigger.wrapping = true;
	trigger.scroll(trigger.end - 1);
}

function scrubTo(totalTime) { // moves the scroll position to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
	let progress = (totalTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
	if (progress > 1) {
		wrapForward(trigger);
	} else if (progress < 0) {
		wrapBackward(trigger);
	} else {
		trigger.scroll(trigger.start + progress * (trigger.end - trigger.start));
	}
}

document.querySelector(".next").addEventListener("click", () => scrubTo(scrub.vars.totalTime + spacing));
document.querySelector(".prev").addEventListener("click", () => scrubTo(scrub.vars.totalTime - spacing));




function buildSeamlessLoop(items, spacing) {
	let overlap = Math.ceil(1 / spacing), // number of EXTRA animations on either side of the start/end to accommodate the seamless looping
		startTime = items.length * spacing + 0.5, // the time on the rawSequence at which we'll start the seamless loop
		loopTime = (items.length + overlap) * spacing + 1, // the spot at the end where we loop back to the startTime 
		rawSequence = gsap.timeline({
			paused: true
		}), // this is where all the "real" animations live
		seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
			paused: true,
			repeat: -1, // to accommodate infinite scrolling/looping
			onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
				this._time === this._dur && (this._tTime += this._dur - 0.01);
			}
		}),
		l = items.length + overlap * 2,
		time = 0,
		i, index, item;

	// set initial state of items
	gsap.set(items, {
		xPercent: 400,
		opacity: 0,
		scale: 0
	});

	// now loop through and create all the animations in a staggered fashion. Remember, we must create EXTRA animations at the end to accommodate the seamless looping.
	for (i = 0; i < l; i++) {
		index = i % items.length;
		item = items[index];
		time = i * spacing;
		rawSequence.fromTo(item, {
				scale: 0,
				opacity: 0
			}, {
				scale: 1,
				opacity: 1,
				zIndex: 100,
				duration: 0.5,
				yoyo: true,
				repeat: 1,
				ease: "power1.in",
				immediateRender: false
			}, time)
			.fromTo(item, {
				xPercent: 400
			}, {
				xPercent: -400,
				duration: 1,
				ease: "none",
				immediateRender: false
			}, time);
		i <= items.length && seamlessLoop.add("label" + i, time); // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
	}

	// here's where we set up the scrubbing of the playhead to make it appear seamless. 
	rawSequence.time(startTime);
	seamlessLoop.to(rawSequence, {
		time: loopTime,
		duration: loopTime - startTime,
		ease: "none"
	}).fromTo(rawSequence, {
		time: overlap * spacing + 1
	}, {
		time: startTime,
		duration: startTime - (overlap * spacing + 1),
		immediateRender: false,
		ease: "none"
	});
	return seamlessLoop;
}