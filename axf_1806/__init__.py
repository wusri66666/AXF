from __future__ import absolute_import
from axf_1806.celery import app as celery_app
import pymysql
pymysql.install_as_MySQLdb()