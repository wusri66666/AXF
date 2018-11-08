import uuid,hashlib

def get_unique_str():
    uuid_str = str(uuid.uuid4()).encode('utf-8')
    md5 = hashlib.md5()
    md5.update(uuid_str)
    return md5.hexdigest()

def get_cart_money(cart_items):
    sum_money = 0
    cart_items = cart_items.filter(is_selected = True)
    for i in cart_items:
        sum_money = sum_money+i.goods.price * i.num
    return sum_money
