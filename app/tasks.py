# 要有生成的url，html页面，send_mail，缓存：key:uuid，value:user_id
from celery import task
from django.conf import settings
from django.core.cache import cache
from django.core.mail import send_mail
from django.template import loader


@task
def send_verify_mail(url,user_id,reciever):
    title = '验证邮件'
    print()
    content = ''
    res = loader.get_template('user/email.html')
    res_str = res.render({'url':url})
    email_from = settings.DEFAULT_FROM_EMAIL
    send_mail(title,content,email_from,[reciever],html_message=res_str)
    #设置缓存
    cache.set(url.split('/')[-1],user_id,settings.VERIFY_CODE_MAX_AGE)






